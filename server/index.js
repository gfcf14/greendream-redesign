const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const nodeMailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const sqlString = require('sqlstring');

const app = express();
const upload = multer();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const admin = `GreenDream Admin <${process.env.ADMIN_EMAIL}>`;
const key = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const transporter = nodeMailer.createTransport(smtpTransport({
  host: 'smtp.mailgun.org',
  port: 465,
  from: admin,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASSWORD,
  },
  tls: { // Fix self-signed certificate error
    rejectUnauthorized: false,
  },
}));

function getDomain() {
  return process.env.REACT_APP_IP_ADDRESS === 'localhost' ? 'http://localhost:3000' : 'http://www.greendreampg.net';
}

function getSubject(referer) {
  let refererText = '';
  switch(referer) {
    case 'confirm':
      refererText = 'Confirm your account';
      break;
    case 'contact':
      refererText = 'New Contact message';
      break;
    case 'new':
      refererText = 'New member';
      break;
    case 'password':
      refererText = 'Password recovery';
      break;
    case 'play':
      refererText = 'New App Play';
      break;
    case 'typingtest':
      refererText = 'Your TypingTest results';
      break;
    case 'username':
      refererText = 'Username recovery';
      break;
    default:
      refererText = 'Unknown referer';
      break;
  }

  return `GreenDream: ${refererText}`;
}

function getNameByRow(rowName) {
  switch (rowName) {
    case 'chooseforme': {
      return 'Choose For Me';
    }
    case 'chordplayer': {
      return 'Chord Player';
    }
    case 'employmentassistant': {
      return 'Employment Assistant';
    }
    case 'oruga': {
      return 'Oruga';
    }
    case 'racemaster': {
      return 'RaceMaster';
    }
    case 'smssender': {
      return 'SMS Sender';
    }
    case 'troubleshooter': {
      return 'TroubleShooter';
    }
    case 'typingtest': {
      return 'Typing Test';
    }
    case 'urlplayer': {
      return 'URL Player';
    }
    case 'votebuster': {
      return 'VoteBuster';
    }
    case 'whereforetheheckartthou': {
      return 'Wherefore The Heck Art Thou?';
    }
    default: {
      return 'Non-specified game';
    }
  }
}

function sendEmail(email, referer, text) {
  const emailData = {
    from: admin,
    to: email || process.env.RECEIVER_EMAIL,
    subject: getSubject(referer),
    text,
  };

  return transporter.sendMail(emailData, (error) => {
    return error;
  });
}

function getToken(limit) {
  let generatedKey = '';

  for (let i = 0; i < limit; i++) {
    generatedKey += key[Math.floor(Math.random() * key.length)];
  }

  return generatedKey;
}

function sanitize(value) {
  const sanitizedString = sqlString.escape(value);

  return sanitizedString.substring(1, sanitizedString.length - 1);
}

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});

app.get('/table', (req, res) => {
  const { tableName, tableOrder } = req.query;

  pool.query(`select * from ${tableName} ${tableOrder}`, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
});

app.get('/row', (req, res) => {
  const { rowName, tableName, columnName } = req.query;

  pool.query(`select * from ${tableName} where ${columnName} = '${rowName}'`, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log(results);
      res.send(results);
    }
  });
});

app.get('/increment', (req, res) => {
  const { rowName, tableName, columnName } = req.query;

  pool.query(`update ${tableName} set count = count + 1 where ${columnName} = '${rowName}'`, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      const text = `Someone has played the app ${getNameByRow(rowName)}`;
      const emailError = sendEmail(undefined, 'play', text);

      if (!emailError) {
        pool.query(`select * from ${tableName} where ${columnName} = '${rowName}'`, (err, results) => {
          if (err) {
            res.send(err);
          } else {
            res.send(results);
          }
        });
      } else {
        res.status(500).json({ text: emailError });
      }
    }
  });
});

app.get('/email', (req, res) => {
  const { referer, email, message } = req.query;

  let messageBody = message;

  if (referer === 'contact') {
    const { contactName, contactEmail, contactMessage } = JSON.parse(message);

    messageBody = `New message received from ${contactName}:\n\n` +
                  `${contactMessage}\n\n` +
                  `Reply to them at ${contactEmail}`;
  }

  const emailError = sendEmail(email, referer, messageBody);

  if (!emailError) {
    res.status(200).json({ text: 'success' });
  } else {
    res.status(500).json({ text: emailError });
  }
});

app.get('/exists', (req, res) => {
  const { column, value } = req.query;

  pool.query(`select * from Users where ${column} = '${sanitize(value)}'`, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

app.get('/signin', (req, res) => {
  const { table, userName, password } = req.query;

  pool.query(`select * from ${table} where username = '${sanitize(userName)}'`, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      if (bcrypt.compareSync(sanitize(password), results[0].password)) {
        const activeToken = results[0].active;

        if (activeToken === 'yes') {
          res.send({
            status: 'success',
            data: results,
          });
        } else {
          res.send({
            status: 'unconfirmed',
            data: [],
          });
        }
      } else {
        res.send({
          status: 'invalid',
          data: [],
        });
      }
    }
  });
});

app.get('/recover', async (req, res) => {
  const { email, value } = req.query;

  const safeEmail = sanitize(email);

  let referer = '';
  let messageBody = '';

  switch(value) {
    case 'p': {
      const generatedToken = getToken(60);
      pool.query(`update Users set token = '${generatedToken}' where email = '${safeEmail}'`, (err) => {
        if (err) {
          console.error(err);
        } else {
          const iDateU = Math.round(new Date().getTime() / 1000);

          pool.query(`update Users set datelimit = '${iDateU}' where email = '${safeEmail}'`, (err) => {
            if (err) {
              console.error(err);
            }
          });
        }
      });

      referer = 'password';
      messageBody = `Click on the following link to change your password:\n\n` +
                    `${getDomain()}/change?token=${generatedToken}\n\n` +
                    `Due to security measures, this password change token will expire in 5 minutes from the delivery of this message. Please change your password soon.\n\n` +
                    `Thank you,\n` +
                    `GreenDream Admin`;

      const emailError = sendEmail(email, referer, messageBody);

      if (!emailError) {
        res.send(referer);
      } else {
        res.send('error');
      }
      break;
    }
    case 'u': {
      pool.query(`select * from Users where email = '${sanitize(email)}'`, (err, results) => {
        if (err) {
          console.error(err);
        } else {
          const fetchedUsername = results[0].username;

          referer = 'username';
          messageBody = `You have received this email because you requested your username. It is:\n\n` +
                        `${fetchedUsername}\n\n` +
                        `Click here (${getDomain()}) to login now.\n\n` +
                        `Thank you,\n` +
                        `GreenDream Admin`;

          const emailError = sendEmail(email, referer, messageBody);

          if (!emailError) {
            res.send(referer);
          } else {
            res.send('error');
          }
        }
      });
      break;
    }
    default:
      break;
  }
});

app.get('/change', (req, res) => {
  const { token } = req.query;

  if (!token) {
    res.send('empty');
  } else {
    pool.query(`select * from Users where token = '${token}'`, (err, results) => {
      if (err) {
        console.error(err);
        res.send('invalid');
      } else {
        if (results.length === 0) {
          res.send('invalid');
        } else {
          const { datelimit } = results[0];
          const iDateU = Math.round(new Date().getTime() / 1000);

          if (iDateU - datelimit <= 300) {
            res.send('valid');
          } else {
            res.send('expired');
          }
        }
      }
    });
  }
});

app.get('/password', async (req, res) => {
  const { password, token } = req.query;

  pool.query(`select * from Users where token = '${sanitize(token)}'`, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      const { username } = results[0];

      pool.query(`update Users set password = '${bcrypt.hashSync(sanitize(password), 10)}', token = '', datelimit = 0 where username = '${username}'`, (updateErr) => {
        if (updateErr) {
          res.send('error');
        } else {
          res.send('yes');
        }
      });
    }
  });
});

app.get('/confirm', (req, res) => {
  const { token } = req.query;

  if (!token) {
    res.send('empty');
  } else {
    pool.query(`select * from Users where active = '${sanitize(token)}'`, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        if (results.length === 1) {
          const userAffected = results[0].username;

          pool.query(`update Users set active = 'yes' where username = '${userAffected}'`, (updateErr) => {
            if (updateErr) {
              console.error(updateErr);
              res.send('empty');
            } else {
              res.send('success');
            }
          });
        } else {
          res.send('dubious');
        }
      }
    });
  }
});

app.post('/insert', upload.none(), async (req, res) => {
  const { table, ...data } = req.body;

  let columnList = '';
  let valueList = '';

  const activeToken = getToken(60);

  const userValues = {
    ...data,
    active: activeToken,
  };

  Object.keys(userValues).map((key, i, arr) => {
    if (!(key === 'img' && userValues[`${key}`] === 'default')) {
      columnList += `${key}${arr.length - 1 !== i ? ', ' : ''}`;

      const escapedVal = sanitize(userValues[`${key}`]);

      if (key === 'password') {
        valueList += `"${bcrypt.hashSync(escapedVal, 10)}", `;
      } else {
        valueList += `"${escapedVal}"${arr.length - 1 !== i ? ', ' : ''}`;
      }
    }
  });

  pool.query(`insert into ${table} (${columnList}) values (${valueList})`, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      const { email, name, username } = userValues;
      const ref = `${getDomain()}/confirm?code=${activeToken}`;

      const confirmMessage = `Dear ${name}(${username}),\n\n` +
                             `Welcome to GreenDream! This email is to confirm your account registration on our site.` +
                             `Please click on the following link to complete account verification:\n\n` +
                             `${ref}\n\n` +
                             `Thank you,\n` +
                             `GreenDream Admin`;

      const newMemberMessage = `A new Member (${username}) has registered an account for the GreenDream site!!!`;

      sendEmail(email, 'confirm', confirmMessage);
      sendEmail(undefined, 'new', newMemberMessage);

      res.send(results);
    }
  });
});
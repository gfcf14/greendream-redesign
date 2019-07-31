const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const nodeMailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const app = express();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const admin = `GreenDream Admin <${process.env.ADMIN_EMAIL}>`;

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

function getSubject(referer) {
  switch(referer) {
    case 'contact': {
      return 'GreenDream: New Contact message';
    }
    case 'play': {
      return 'GreenDream: New App Play';
    }
    case 'typingtest': {
      return 'GreenDream: Your TypingTest results';
    }
    default: {
      return 'No referer';
    }
  }
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

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});

app.get('/table', (req, res) => {
  const { tableName, tableOrder } = req.query;

  pool.query(`select * from ${tableName} ${tableOrder}`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(results);
    }
  });
});

app.get('/row', (req, res) => {
  const { rowName, tableName, columnName } = req.query;

  pool.query(`select * from ${tableName} where ${columnName} = '${rowName}'`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});

app.get('/increment', (req, res) => {
  const { rowName, tableName, columnName } = req.query;

  pool.query(`update ${tableName} set count = count + 1 where ${columnName} = '${rowName}'`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      const emailData = {
        from: admin,
        to: process.env.RECEIVER_EMAIL,
        subject: getSubject('play'),
        text: `Someone has played the app ${getNameByRow(rowName)}`,
      };

      transporter.sendMail(emailData, (error) => {
        try {
          pool.query(`select * from ${tableName} where ${columnName} = '${rowName}'`, (err, results) => {
            if (err) {
              return res.send(err);
            } else {
              return res.send(results);
            }
          });
        } catch (e) {
          return res.send(error);
        }
      });
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

  const emailData = {
    from: admin,
    to: email ? email : process.env.RECEIVER_EMAIL,
    subject: getSubject(referer),
    text: messageBody,
  };

  transporter.sendMail(emailData, (error) => {
    try {
      return res.status(200).json({ text: 'success' });
    } catch (e) {
      return res.status(500).json({ text: error });
    }
  });
});
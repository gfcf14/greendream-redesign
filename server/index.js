const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const mailgun = require("mailgun-js");

const app = express();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

const admin = `GreenDream Admin <${process.env.ADMIN_EMAIL}>`;

function getSubject(referer) {
  switch(referer) {
    case 'typingtest': {
      return 'GreenDream: Your TypingTest results';
    }
    case 'play': {
      return 'GreenDream: New App Play';
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
      const data = {
        from: admin,
        to: process.env.RECEIVER_EMAIL,
        subject: getSubject('play'),
        text: `Someone has played the app ${getNameByRow(rowName)}`,
      };

      mg.messages().send(data, (error) => {
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

  const data = {
    from: admin,
    to: email,
    subject: getSubject(referer),
    text: message,
  };

  mg.messages().send(data, (error) => {
    try {
      return res.status(200).json({ text: 'success' });
    } catch (e) {
      return res.send(error);
    }
  });
});
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

function getSubject(referer) {
  switch(referer) {
    case 'typingtest': {
      return 'GreenDream: Your TypingTest results';
    }
    default: {
      return 'No referer';
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

app.get('/email', (req, res) => {
  // set up SMTP configuration
  const transporter = nodeMailer.createTransport(smtpTransport({
    // FOR GMAIL: host: smtp.gmail.com, port: 465
    // FOR IONOS: host: smtp.ionos.com, port: 587
    host: 'smtp.gmail.com',
    port: 465,
    from: process.env.ADMIN_EMAIL,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASSWORD,
    },
    tls: { // Fix self-signed certificate error
      rejectUnauthorized: false,
    },
  }));

  const { referer, email, message } = req.query;

  const subject = getSubject(referer);

  const emailData = {
    from: 'carloscuba014@gmail.com',
    to: email,
    subject,
    text: message,
  };

  transporter.sendMail(emailData, (error) => {
    try {
      return res.status(200).json({ text: 'success' });
    } catch (e) {
      return res.status(500).json({ text: error });
    }
  });
});
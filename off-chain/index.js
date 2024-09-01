const express = require('express');
const multer = require('multer');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

app.use(cors());

const port = 3002;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/send-email', upload.single('pdf'), function (req, res) {
  const { name, email, address } = req.body;
  const { path: pdfPath, originalname: pdfName } = req.file;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dro.odisha.official@gmail.com',
      pass: 'ggogxpfbetqgqbsz',
    },
  });

  const mailOptions = {
    from: 'dro.odisha.official@gmail.com',
    to: 'tyransen35@gmail.com',
    subject: 'Sending PDF file',
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Address:</strong> ${address}</p>`,
    attachments: [
      {
        filename: pdfName,
        path: pdfPath,
        contentType: 'application/pdf',
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
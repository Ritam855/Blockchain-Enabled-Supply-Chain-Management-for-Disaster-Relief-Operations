const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3002;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CSP header middleware
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self' http://localhost:3002/favicon.ico");
  next();
});

// API route to send email
app.post('/send-email', (req, res) => {
  // Get form data from the request body
  const { name, email, message } = req.body;

  // Create a transporter object with your email credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  // Define email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'New message from your website',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

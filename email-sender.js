const nodemailer = require('https://www.w3schools.com/nodejs/nodejs_email.asp');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-recipient@example.com',
  subject: 'Test Email from Node.js',
  text: 'Hello, this is a test email from Node.js!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Email sent:', info.response);
  }
});
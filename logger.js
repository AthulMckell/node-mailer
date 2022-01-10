const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'athulmck@outlook.com',
      pass: 'haridwajraj12q78'
    }
  });
 const sendMail = (mail) => {
  var mailOptions = {
    from: 'athulmck@outlook.com',
    to: mail,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendMail;
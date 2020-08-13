const nodemailer = require('nodemailer');
require('dotenv').config();

const log = console.log;
// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {  
        user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || 'app specific password' // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'kunalguatam1371@gmail.com', // TODO: email sender
    to: 'kunal.1822it1077@kiet.edu', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Sending mail through nodemailer!!'
};


// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs ' + err);
    }
    return log('Email sent!!!');
});

   

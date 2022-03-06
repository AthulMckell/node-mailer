var express = require('express');
var app = express();
const bodyParser = require('body-Parser');
//var nodeMailer = require('nodemailer');
const sendMail = require('./logger');

const PORT = 5000;

app.use(bodyParser.urlencoded({extended : true}));

app.get('/',(req,res)=>
res.send('WELCOME, Athul RAJ fsd b1')
);

app.get('/home',(req,res)=>
res.sendFile(__dirname + "/index.html"));

app.post("/home", (req, res) => {
    res.send("Thank you for subscribing")});

app.post('/mailer', (req,res)=>
{   
    console.log(req.body.mail);
    //res.send(`Email: ${req.body.mail}`);
    //new
    const {mail} = req.body;
    console.log('Data: ', req.body);

    sendMail(mail, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Something went wrong' });
        } else {
            res.status({ message: 'Mail Sent Successfully' });
        }
    });
    // res.json({ message: 'Message received!!!' })
});
//newend


app.listen(PORT, () =>{
    console.log(`Your server is running on port ${PORT}`);
});

var express = require('express');
var app = express();
const bodyParser = require('body-Parser');

const PORT = 5000;

app.use(bodyParser.urlencoded({extended : true}));

app.get('/',(req,res)=>
res.send('WELCOME, Athul RAJ fsd b1')
);

app.get('/home',(req,res)=>
res.sendFile(__dirname + "/views/index.html"));

app.post("/home", (req, res) => {
    res.send("Thank you for subscribing")});

app.post('/mailer', (req,res)=>
{   
    console.log(req.body.mail);
    res.send(`Email ${req.body.mail}`);
});


app.listen(PORT, () =>{
    console.log(`Your server is running on port ${PORT}`);
});

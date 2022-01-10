var express = require('express');
var app = express();

const PORT = 5000;

app.get('/',(req,res)=>
res.send('WELCOME, Athul RAJ fsd b1')
);

app.get('/home',(req,res)=>
res.sendFile(__dirname + "/views/index.html"));

app.post("/home", (req, res) => {
    res.send("Thank you for subscribing")});

// app.post('/mailer', (req,res))


app.listen(PORT, () =>{
    console.log(`Your server is running on port ${PORT}`);
});

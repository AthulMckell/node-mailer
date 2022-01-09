var express = require('express');
var app = express();

const port = 5000;

app.get('/',(req,res)=>
res.sendFile('index.html'));
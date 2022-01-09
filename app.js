var express = require('express');
var app = express();

const PORT = 5000;

app.get('/',(req,res)=>
res.send('WELCOME, Athul RAJ fsd b1')
);


app.listen(PORT, () =>{
    console.log(`Your server is running on port ${PORT}`);
});

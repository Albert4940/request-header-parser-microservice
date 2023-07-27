const dotenv = require('dotenv').config();
const express = require('express');
var path = require('path');
let app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=>{
 res.sendFile(__dirname + '/views/index.html');
})


app.listen(port);
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose}= require('./db.js');

var app = express();
var customerroombook = require('./customer/customerRoomBook');

app.use(bodyParser.json());

app.use('/customer', customerroombook);

app.listen(3000,() => console.log("server started at port 3000"));
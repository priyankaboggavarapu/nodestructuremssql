var config = require('./config/config');
var express = require('./config/express');
var mongoose = require('./config/mongoose'); //For mongo DB

var db = mongoose();//For mongo DB
var app = express();


app.listen(config.port);
console.log("Server listening to port:", config.port);

module.exports = app;

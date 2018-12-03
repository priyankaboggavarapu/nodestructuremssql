var config = require('./config');
var express = require('express'),
bodyparser = require('body-parser');
passport = require('passport'),
cors = require('cors');

module.exports = () => {
    var app = express();
    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json());
    app.use(cors());


    require('../app/users/users.routes')(app);
    
    return app;
}


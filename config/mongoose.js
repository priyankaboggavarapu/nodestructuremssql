var config = require('./config');
var mongoose = require('mongoose');//For mongo DB



module.exports = () =>{
    mongoose.connect(config.db, (err,connection) => {
        if(err){
            console.log("DB connection error:", err);
        }
        else{
            console.log("Connected to DB");
        }
    })

    var db = mongoose.Connection;

    //require your customised models here
    require('../app/users/users.model');

    
    return db;
}

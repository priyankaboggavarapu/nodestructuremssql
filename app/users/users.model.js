var mongoose = require('mongoose');
var schema = mongoose.Schema;

var users = new schema({
    userName:{
        type: String
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    password:{
        type: String
    },
    mobileNumber:{
        type: Number
    },
    email:{
        type: String
    }
})

mongoose.model('Users', users);

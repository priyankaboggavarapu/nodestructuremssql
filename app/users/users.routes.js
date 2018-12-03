var users = require('./users.controller');

module.exports = (app) => {

    //define your routes here
    app.post('/demo/api/addNewUser', users.addUser);
    app.post('/demo/api/getAllUsers', users.findUser);
    app.post('/demo/api/findUserByName', users.findUserByName);
   
    
}
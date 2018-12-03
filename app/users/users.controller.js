var users = require('mongoose').model('Users');
var userCtrl = {};

userCtrl.addUser = (req, res) => {
    let params = req.body;
    let user = new users({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        mobileNumber: req.body.mobileNumber,
        email: req.body.email
    })

    user.save()
        .then((err, result) => {
            if (result) {
                res.json({
                    code: 200,
                    status: "success",
                    response: result
                })
            }
            else {
                res.json({
                    code: 400,
                    status: "failure",
                    error: err.message
                })
            }

        })
        .catch((err) => {
            res.json({
                code: 400,
                status: "failure",
                error: err.message
            })
        })
}

userCtrl.findUser = (req, res) => {
    let params = req.body;
    users.find()
        .then((err, result) => {
            if (err) {
                console.log(err.message);
                res.json({
                    code: 400,
                    status: "failure",
                    error: err.message
                })
            }
            else {
                console.log(result);
                res.json({
                    code: 200,
                    status: "success",
                    response: result
                })
            }
        })
        .catch((err) => {
            res.json({
                code: 400,
                status: "failure",
                error: err.message
            })
        })
}

userCtrl.findUserByName = (req, res) => {
    let params = req.body;
    users.findOne({ userName: req.body.userName })
        .then((err, result) => {
            if (err) {
                console.log(err.message);
                res.json({
                    code: 400,
                    status: "failure",
                    error: err.message
                })
            }
            else {
                console.log(result);
                res.json({
                    code: 200,
                    status: "success",
                    response: result
                })
            }
        })
        .catch( (err) => {
            console.log(result);
                res.json({
                    code: 200,
                    status: "success",
                    response: result
                })
        })
}

module.exports = userCtrl;

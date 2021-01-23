const UserModel = require("../model/user.schema").UserModel;
var jwt = require("jsonwebtoken");

var verifyToken = require('../middleware/token.middleware');
var jwt_config = require("../config/jwt.config.json");

module.exports.listUsers = (req, res) => {
    UserModel.find({}, {password: 0}).exec((err, docs) => {
        if(err) {
            return res.status(500).json({message: err});
        }

        return res.status(200).json({
            status: true,
            message: "User data prepared.",
            data: docs
        });
    });
};

module.exports.getUser = (req, res) => {
    UserModel.find({_id: req.params.id}, {password: 0}).exec((err, docs) => {
        if(err) {
            return res.status(500).json({message: err});
        }

        return res.status(200).json({
            status: true,
            message: "User data prepared.",
            data: docs
        });
    });
};

module.exports.deleteUser = (req, res) => {
    UserModel.deleteOne({login: req.params.login}).exec((err, docs) => {
        if(err) {
            return res.status(500).json({message: err});
        }

        return res.status(200).json({
            status: true,
            message: "User deleted.",
            data: docs
        });
    });
};

module.exports.createUser = (req, res) => {
    UserModel.find({
        login: req.body.login
    }).exec((err, docs) => {
        if(err) {
            return res.status(500).json({
                message: err
            });
        }

        console.log(docs);
        if(docs.length) {
            return res.status(406).json({
                message: "User with the same login already exists!"
            });
        }

        var user = new UserModel(req.body);

        user.save((err, u) => {
            if(err) {
                return res.status(406).json({
                    message: err
                });
            }

            return res.status(200).json({
                status: true,
                message: "User created!"
            });
        });
    });
};

module.exports.editUser = (req, res) => {
    UserModel.findOne({ _id: req.params.id }).exec((err, doc) => {
        if(err) {
            return res.status(500).json({
                message: err
            });
        }
        UserModel.updateOne({_id: req.params.id}, { $set: {
             login: req.body.login,
             firstName: req.body.firstName,
             lastName: req.body.lastName
         }}, (err, doc) => {
             if(err) {
                return res.status(500).json({
                     message: err
                 });
             }

             return res.status(200).json({
                message: "User edited!",
                status: true
            });

        });
    });
};

module.exports.changePassword = (req, res) => {
    UserModel.findOne({ _id: req.params.id }).exec((err, doc) => {
        if(err) {
            return res.status(500).json({
                message: err
            });
        }
        UserModel.updateOne({_id: req.params.id}, { $set: {
             password: req.body.password
         }}, (err, doc) => {
             if(err) {
                return res.status(500).json({
                     message: err
                 });
             }

             return res.status(200).json({
                message: "Password changed!",
                status: true
            });

        });
    });
};

module.exports.countUsersWidget = (req, res) => {
    UserModel.countDocuments((err, count) => {
        if(err) {
            return res.status(500).json({
                message: err
            });
        }

        return res.status(200).json({
            count: count
        });
    });
};

module.exports.registeredUsersChartWidget = (req, res) => {
    UserModel.find({}, {password: 0}).sort({creationDate: 'asc'}).exec((err, docs) => {
        if(err) {
            return res.status(500).json({
                message: err
            });
        }

        return res.status(200).json({
            data: docs
        });
    });
};

module.exports.signIn =  (req, res) => {
    UserModel.findOne({login: req.body.login, password: req.body.password}, function(err, docs) {
        if(err) {
            res.status(500).json({
                status: false,
                message: err
            });
            return;
        }
        if(docs) {
            var token = jwt.sign({ id: docs._id }, jwt_config.secret, {
                expiresIn: jwt_config.expireTime
            });
            
            console.log("JWT token: " + token);

            res.status(200).json({
                status: true,
                message: "You are succesfully logged in!",
                user: {
                    id: docs._id,
                    login: docs.login,
                    firstName: docs.firstName,
                    lastName: docs.lastName,
                    accessToken: token
                }
            });
        }
        else {
            res.status(403).json({
                status: false,
                message: "Invalid username or password!"
            });
        }
    });
};
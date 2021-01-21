var express = require("express");
var router = express.Router();

const UserModel = require("../model/user.schema").UserModel;

var verifyToken = require('../middleware/token.middleware');

router.get("/users", verifyToken, (req, res) => {
    var dbRes;
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
});

router.put("/users", verifyToken, (req, res) => {
    UserModel.find({
        login: req.body.login
    }).exec((err, docs) => {
        if(err) {
            return res.status(500).json({
                message: err
            });
        }

        if(docs) {
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
                 message: "User created!"
            });
        });
    });
});

router.post('/user/:id', (req, res) => {
    
});

router.get('/users/count', verifyToken, (req, res)=> {
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
});

router.get('/users/chart/registration', verifyToken, (req, res)=> {
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
});

module.exports = router;
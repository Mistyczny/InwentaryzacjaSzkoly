var express = require("express");
var router = express.Router();

const UserModel = require("../model/user.schema").UserModel;

var verifyToken = require('../middleware/token.middleware');
var userController = require('../controller/user.controller');
var jwt_config = require("../config/jwt.config.json");

//User management routes
router.get("/users", verifyToken, userController.listUsers);
router.get("/user/:id", verifyToken, userController.getUser);
router.put("/user", verifyToken,userController.createUser);
router.post('/user/:id', verifyToken, userController.editUser);
router.delete('/user/:login', verifyToken, userController.deleteUser);
router.post('/user/changePassword/:id', verifyToken, userController.changePassword);

//User session
router.post('/signin', userController.signIn);

//Widgets routes
router.get('/users/count', verifyToken, userController.countUsersWidget);
router.get('/users/chart/registration', verifyToken, userController.registeredUsersChartWidget);

module.exports = router;
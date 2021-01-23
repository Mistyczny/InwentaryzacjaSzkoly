var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var path = require("path");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//Mongo DB models
const UserModel = require("./model/user.schema").UserModel;

var mongoose = require("mongoose");
var mongo_config = require("./config/mongodb.config.json");

mongoose.connect(mongo_config.connectionString, mongo_config.options);

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({extended: true}));

//Na produkcji nie używać lub wskazać allow na konkretny ip i port!!!!
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(require('./routes/setup.route')); // Disable it in production use
app.use(require('./routes/user.route')); // User routes
app.use(require('./routes/book.route'));
app.use(require('./routes/inventory.route'));
app.use(require('./routes/bookBorrow.route'));

app.listen(3000, () => {
    console.log("Server listen at http://localhost:3000");
});
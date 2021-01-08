var mongoose = require("mongoose");

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var session = require("express-session");
var path = require("path");

//Mongo DB models
var userSchema = require('./model/user.schema');

var dbString = "mongodb://localhost:27017/srs?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

mongoose.connect(dbString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

app.use(session({
    secret: "Cygan123",
    saveUninitialized: true,
    resave: true
}));

app.use(express.static(__dirname + '/../srs/dist'));

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/signin", (req, res) => {
    if(req.session.logged === true) {
        return res.status(200).json({
            status: false,
            message: "You are already logged in!"
        });
    }

    var dbRes = userSchema.find({login: req.body.login, password: req.body.password}).lean();

    if(dbRes) {
        //Set up session vars
        req.session.logged = true;

        res.status(200).json({
            status: true,
            message: "You are succesfully logged in!"
        });
    }
    else {
        res.status(200).json({
            status: false,
            message: "Invalid username or password!"
        });
    }

});

app.post('/logout', (req, res) => {
    if(req.session.logged !== true) {
        return res.status(200).json({
            success: false,
            message: "You are not logged in!"
        });
    }
    req.session.destroy();
    return res.status(200).json({
        success: true,
        message: "You are logged out!"
    });
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/../srs/dist/srs' ,'index.html'));
    });

app.listen(3001, () => {
    console.log("Server listen at http://localhost:3001");
});
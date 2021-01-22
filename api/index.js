var mongoose = require("mongoose");

var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var path = require("path");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//Mongo DB models
const UserModel = require("./model/user.schema").UserModel;
const BookModel = require("./model/book.schema").BookModel;

var dbString = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

mongoose.connect(dbString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

//Na produkcji nie używać lub wskazać allow na konkretny ip i port!!!!
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

//JWT secret key
var jwt_config = {
    secret: "aLASKA#123",
    expireTime: 86400 //24H
};

app.use(express.static(__dirname + '/../srs/dist'));

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({extended: true}));

//Check token
function verifyToken(req, res, next)  {
    console.log(req.headers);
    let token = req.headers.authorization;
    
    if (!token) {
      return res.status(401).send({ message: "No token provided!" });
    }
  
    jwt.verify(token, jwt_config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized!" });
      }
      res.locals.id = decoded.id; 
      next();
    });
};

app.use(require('./routes/user.route'));
app.use(require('./routes/book.route'));
app.use(require('./routes/inventory.route'));
app.use(require('./routes/bookBorrow.route'));

app.get("/setup", (req, res) => {
    var user = new UserModel({
        login: "admin",
        password: "Zaq12wsx",
        firstName: "System",
        lastName: "Administrator",
        creationDate: new Date()
    });

    user.save();
    res.end();
});

app.post("/signin", (req, res) => {
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
        } else {
            res.status(403).json({
                status: false,
                message: "Invalid username or password!"
            });
        }
    });
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '../srs/dist/srs' ,'index.html'));
});

app.listen(3000, () => {
    console.log("Server listen at http://localhost:3000");
});
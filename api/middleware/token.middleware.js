var jwt = require("jsonwebtoken");
var jwt_config = require("../config/jwt.config.json");

var verify = (req, res, next) => {
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

module.exports = verify;


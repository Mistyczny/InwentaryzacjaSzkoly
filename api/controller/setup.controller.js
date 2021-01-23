var verifyToken = require('../middleware/token.middleware');

module.exports.setup = (req, res) => {
    var user = new UserModel({
        login: "admin",
        password: "Zaq12wsx",
        firstName: "System",
        lastName: "Administrator",
        creationDate: new Date()
    });

    user.save();
    res.status(200).json({
        message: "Database prepared!"
    });
};
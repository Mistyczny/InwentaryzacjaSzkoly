var express = require("express");
var router = express.Router();

var setupController = require('../controller/setup.controller');

//Setup
router.get('/setup', setupController.setup);

module.exports = router;
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

/* GET home page. */
router.post('/', jsonParser, function(req, res) {
   res.send(JSON.stringify(req.body, null, 2));
});

module.exports = router;

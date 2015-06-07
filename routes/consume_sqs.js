var cluster = require('cluster');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// POST /consume_sqs
router.post('/', function(req, res) {
  console.log(req.body)
  if (req.body.sleep != null) {
     sleep(30);
     res.send('Worker:' + cluster.worker.id + ' JSON BODY: ' + JSON.stringify(req.body, null, 2));
   } else {
    res.send('Worker: ' + cluster.worker.id + ' JSON BODY: ' + JSON.stringify(req.body, null, 2));
   }
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("api working");
});


router.get('/addblogpost/', function(req, res, next) {
  res.send("api working");
});

// router.put()
module.exports = router;

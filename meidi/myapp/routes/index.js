var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/lx', function(req, res, next) {
  res.render('lx', {});
});

module.exports = router;

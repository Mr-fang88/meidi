var express = require('express');
var router = express.Router();
var { db } = require('../db/db');

router.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methos','*');
  next();
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user ing');
});
router.get('/cuckoo', function(req, res, next) {
  res.render('cuckoo',{});
});
router.get('/Hualing', function(req, res, next) {
  res.render('Hualing',{});
});
router.get('/Swan', function(req, res, next) {
  res.render('Swan',{});
});
router.get('/colmo', function(req, res, next) {
  res.render('colmo',{});
});
router.get('/group', function(req, res, next) {
  res.render('group',{});
});


router.get('/lx', function(req, res, next) {
  res.render('lx',{});
});

module.exports = router;

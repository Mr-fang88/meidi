var express = require('express');
var router = express.Router();
var { db } = require('../db/db');
const { render } = require('pug');
var bodyparser = require('body-parser');

var encodepaser = bodyparser.urlencoded({ extended: false })
router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methos', '*');
  next();
})
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('user ing');
});

//会员秒杀接口
router.get("/miao", function (request, response) {
  response.render('miao');
});
// 秒杀促销活动子页面
router.get("/miao_promote01", function (request, response) {
  response.render("miao_promote01");
})


router.get("/miao_promote02", function (resquest, response) {
  response.render("miao_promote02");
})
router.get("/miao_promote03", function (resquest, response) {
  response.render("miao_promote03");
})

module.exports = router;

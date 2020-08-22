var express = require('express');
var router = express.Router();
var { db } = require('../db/db');
const { render } = require('pug');


router.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methos','*');
  next();
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user ing');
});

//会员秒杀接口
router.get("/miao.html",function(request,response){
  response.render('miao');
}); 
// 秒杀促销活动子页面
router.get("/miao_promote01.html",function(resquest,response){
  response.render("miao_promote01");
})
router.get("/miao_promote02.html",function(resquest,response){
  response.render("miao_promote02");
})
router.get("/miao_promote03.html",function(resquest,response){
  response.render("miao_promote03");
})
module.exports = router;

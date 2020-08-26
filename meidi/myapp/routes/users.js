var express = require('express');
var router = express.Router();
var { db } = require('../db/db');
const { render } = require('pug');
var bodyparser = require('body-parser');

db.connect();

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

// 渲染promote02文件中的内容
router.get("/miao_promote02", function (resquest, response) {

  response.render("miao_promote02");
})
router.post("/requestData",function(request,response){
  console.log("8888");
  var sql = 'select * from miao_goods'
  db.query(sql,function(err,data){
    if(err){
      console.log("请求出错")
    }else{
      console.log(data)
      response.send(data)
    }
  })
})

router.get("/miao_promote03", function (resquest, response) {
  response.render("miao_promote03");
})

router.get('/goods_detail',function(resquest,response){
  response.render('goods_detail')
})


module.exports = router;















module.exports = router;

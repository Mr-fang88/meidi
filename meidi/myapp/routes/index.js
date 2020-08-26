var express = require('express');
var router = express.Router();
var { db } = require('../db/db');


// 跨域
router.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methos','*');
  next();
})

// 商品列表---活动
router.get('/goods',function(req,res){
  let sql = `select * from goods`
  db.query(sql,function(err,data){
    if(err){
      console.log(err)
    } else {
      res.send({
        code:1,
        data:data,
        msg:'success'
      })
    }
  })
})
// 商品列表---活动
router.get('/goods_2',function(req,res){
  let sql = `select * from goods_2`
  db.query(sql,function(err,data){
    if(err){
      console.log(err)
    } else {
      res.send({
        code:1,
        data:data,
        msg:'success'
      })
    }
  })
})
// 商品列表---活动
router.get('/goods_3',function(req,res){
  let sql = `select * from goods_3`
  db.query(sql,function(err,data){
    if(err){
      console.log(err)
    } else {
      res.send({
        code:1,
        data:data,
        msg:'success'
      })
    }
  })
})
// 商品列表---活动
router.get('/goods_4',function(req,res){
  let sql = `select * from goods_4`
  db.query(sql,function(err,data){
    if(err){
      console.log(err)
    } else {
      res.send({
        code:1,
        data:data,
        msg:'success'
      })
    }
  })
})
// 商品列表---活动
router.get('/goods_5',function(req,res){
  let sql = `select * from goods_5`
  db.query(sql,function(err,data){
    if(err){
      console.log(err)
    } else {
      res.send({
        code:1,
        data:data,
        msg:'success'
      })
    }
  })
})
// 商品详情页
router.get('/details',function(req,res){
  let sql = `select * from goods_details`
  db.query(sql,function(err,data){
    if(err){
      console.log(err)
    } else {
      res.send({
        code:1,
        data:data,
        msg:'success'
      })
    }
  })
})
// 购物车
router.get('/Product_data',function(req,res){
  let sql = `select * from shopping_cart`
  db.query(sql,function(err,data){
    if(err){
      console.log(err)
    } else {
      res.send({
        code:1,
        data:data,
        msg:'success'
      })
    }
  })
})


// 主页
// localhost:3000
router.get('/', function(req, res) {
  res.render('index',{})
});
// 登录
router.get('/login',function(req,res){
  res.render('home_login',{})
})
router.post('/login', function(req, res) {
  let sql = `select * from users where account='${req.body.account}' && password='${req.body.psw}'`
  db.query(sql,function(err,data){
    if(err){
      console.error(err)
    } else {
      res.send({
        code:1,
        data:data[0],
        msg:'success'
      })
    }
  })
});
// 注册
router.get('/DoRegistered',function(req,res){
  res.render('DoRegistered',{})
})
router.post('/DoRegistered', function(req, res) {
  if(req.body.psw === req.body.to_psw){
    let sql = `insert into users (account,password) values ('${req.body.account}','${req.body.psw}')`
    db.query(sql,function(err,data){
      if(err){
        console.error(err)
      } else {
        res.send({
          code:1,
          data:data[0],
          msg:'success'
        })
      }
    })
  }
});
// 搜索
router.get('/search',function(req,res){
  res.render('home_search',{})
})
// 每周五特惠
router.get('/FridayPre',function(req,res){
  res.render('home_FridayPre',{
    name:'美的商城-周五特惠',
    url_1:'//pic.midea.cn/h5/img/friday/header_h5_1.jpg?x-oss-process=image/format,webp/quality,Q_90&t=20160331',
    url_2:'//pic.midea.cn/h5/img/friday/header_h5_2.jpg?x-oss-process=image/format,webp/quality,Q_90&t=20160331',
    url_3:'//pic.midea.cn/h5/img/friday/header_h5_3.jpg?x-oss-process=image/format,webp/quality,Q_90&t=20160331',
    url_4:'//pic.midea.cn/h5/img/friday/header_h5_4.jpg?x-oss-process=image/format,webp/quality,Q_90&t=20160331',
})
})






module.exports = router;

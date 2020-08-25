var express = require('express');
var router = express.Router();
var { db } = require('../db/db');



router.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methos','*');
  next();
})


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


// 主页
// localhost:3000
router.get('/', function(req, res) {
  res.render('index',{})
});

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


router.get('/search',function(req,res){
  res.render('home_search',{})
})






module.exports = router;

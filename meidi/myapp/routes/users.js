var express = require('express');
var router = express.Router();
var { db } = require('../db/db');
const { render } = require('../app');

router.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methos','*');
  next();
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  var sql = `select * from meidi`
  db.query(sql,function(err,data){
    if(err){
      console.log('错错错错错错错')
      console.log(err)
    } else {
      console.log(data)
      res.render('users',{data})
      // res.send(data)
    }
  })
});



// 个人中心
router.get('/center', function(req,res,next){
  res.render('center',{})
})

// 勋章
router.get('/center/medal', function(req,res,next){
  res.render('medal',{})
})

// 我的特权
router.get('/center/medal/my_privilege', function(req,res,next){
  res.render('my_privilege',{})
})

// 关注
router.get('/center/follow', function(req,res,next){
  res.render('follow',{})
})

// 积分
router.get('/center/integral', function(req,res,next){
  res.render('integral',{})
})

// 优惠券
// router.get('/center/coupon', function(req,res,next){
//   res.render('coupon',{})
// })

// 礼品卡
router.get('/center/card', function(req,res,next){
  res.render('card',{})
})

// 我的拼团
router.get('/center/group', function(req,res,next){
  res.render('group',{})
})

// 极速保价
router.get('/center/insured', function(req,res,next){
  res.render('insured',{})
})


module.exports = router;

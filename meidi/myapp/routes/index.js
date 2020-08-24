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
  var sql = `select * from users`
  db.query(sql,function(err,data){
    if(err){
      console.log('错错错错错错错')
      console.log(err)
    } else {
      console.log(data)
      res.render('index',{data})
      // res.send(data)
    }
  })
});



module.exports = router;

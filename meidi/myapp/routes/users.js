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
  var sql = `select * from users`
  db.query(sql,function(err,data){
    if(err){
      console.log('错')
      console.log(err)
    } else {
      res.render('users',{data})
      // res.send(data)
    }
  })
});





module.exports = router;

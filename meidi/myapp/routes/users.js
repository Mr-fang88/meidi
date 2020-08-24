var express = require('express');
var router = express.Router();
var { db } = require('../db/db');
const { render } = require('../app');

router.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methos','*');
  next();
})




router.get('/shopping',function(req,res){
  res.render('shopping',{})
})
router.get("/conpons",function(req,res){
    res.render('conpons',{})
})
router.get("/conpons_two",function(req,res){
  res.render('conpons_two',{})
})
router.get("/conpons_third",function(req,res){
  res.render("conpons_third",{})
})
router.get("/conpons_fourth",function(req,res){
  res.render("conpons_fourth",{})
})




module.exports = router;

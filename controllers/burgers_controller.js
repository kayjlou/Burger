var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req,res){
  burger.selectAll(function(data){
    console.log(data)
  res.render('index', {burger: data})
  })
});

router.post('/', function(req,res){
 burger.insertOne(req.body.burger_name, function(){
   return res.redirect('/')
 })
});

router.put('/api/burgers/:id', function(req,res){
  burger.update(req.body.id, function(){
    return res.redirect('/');
  })
});


module.exports = router;
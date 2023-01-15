var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
// var checkAuth = require("./../middleware/checkAuth.js");
// var Agent = require("../models/agent").Agent
// var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся agent');
});

/* Страница агентов */
router.get("/:nick", function(req, res, next) {
  db.query(`SELECT * FROM agents WHERE agents.nick = '${req.params.nick}'`, (err, agents) => {
  if(err) {
  console.log(err);
  if(err) return next(err)
  } else {
  if(agents.length == 0) return next(new Error("There was no such agent in valorant, maybe you made a mistake in your request?"))
  var agent = agents[0];
  res.render('agent', {
  title: agent.title,
  picture: agent.avatar,
  desc: agent.about
  })
  // result(null, results);
  }
  })
  // Cat.findOne({nick:req.params.nick}, function(err, cat){
  // if(err) return next(err)
  // if(!cat) return next(new Error("Нет такого котенка в этом мультике"))
  // res.render('cat', {
  // title: cat.title,
  // picture: cat.avatar,
  // desc: cat.desc,
  // });
  // })
  });
  
    module.exports = router
    
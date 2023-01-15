var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
// var checkAuth = require("./../middleware/checkAuth.js");
// var Agent = require("../models/agent").Agent
// var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с agent');
});

/* Страница агентов */
router.get('/:nick', function(req, res, next) {
    Agent.findOne({nick:req.params.nick}, function(err,agent){
        if(err) return next(err)
        if(!agent) return next(new Error("Нет такого агента в valorant"))
        res.render('agent', {
          title: agent.title,
          picture: agent.avatar,
          desc1: agent.desc1,
          desc2: agent.desc2,
          desc3: agent.desc3,
        })
    })
  })
  
module.exports = router
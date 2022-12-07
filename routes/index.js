var express = require('express')
var router = express.Router()
var Agent = require("../models/agent").Agent


/* GET home page. */
router.get('/', function(req, res, next) {
    Agent.find({},{_id:0,title:1,nick:1},function(err,menu){
        req.session.greeting = "Hi!!!",
            res.cookie('greeting', 'Hi!!!').render('index', {
            title: 'Express',
            menu: menu,
            counter:req.session.counter
        });
    })
  
});
  

module.exports = router;
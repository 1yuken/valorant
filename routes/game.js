var express = require('express');
var router = express.Router();
var Vals = require("../models/valo").Vals

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с game');
}); 

/* Страница игры */
router.get('/:nick', function(req, res, next) {
    Vals.findOne({nick:req.params.nick}, function(err,Vals){
        if(err) return next(err)
        if(!Vals) return next(new Error("There is no such character in Valorant, maybe you made a mistake in his name?"))
        res.render('val', {
            title: Vals.title,
            picture: Vals.avatar,
            desc: Vals.desc
        })
    })
})


module.exports = router;
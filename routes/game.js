var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с game');
});

module.exports = router;

/* Страница игры */
router.get('/:nick', function(req, res, next) {
    Val.findOne({nick:req.params.nick}, function(err,val){
        if(err) return next(err)
        if(!val) return next(new Error("There is no such character in Valorant, maybe you made a mistake in his name?"))
        res.render('val', {
            title: val.title,
            picture: val.avatar,
            desc: val.desc
        })
    })
})


module.exports = router;
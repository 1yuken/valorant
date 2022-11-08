var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Карамельки */
router.get('/chamber', function(req, res, next) {
  res.render('valo', {
    title: "Chamber",
    picture: "images/chamber.png",
    desc: "Chamber, французский конструктор оружия, уничтожает врагов с поразительной точностью. Уникальные умения этого нового стража позволяют эффективно защищаться, нейтрализовать врагов издалека и продумывать любой план до мельчайших подробностей."
});
});


/* Страница Карамельки */
router.get('/jett', function(req, res, next) {
  res.render('valo', {
    title: "Jett",
    picture: "images/jett.jpg",
    desc: "Jett — южнокорейский агент-дуэлянт из игры VALORANT, который обладает большой мобильностью и специализируется на убийствах. Как настоящий ниндзя, Jett может прыгать на короткие расстояния, чтобы догнать врагов или избежать опасной ситуации."
});
});


/* Страница Карамельки */
router.get('/sage', function(req, res, next) {
  res.render('valo', {
    title: "Sage",
    picture: "images/Sage.png",
    desc: "Защитница Китая Sage обеспечивает безопасность команды в бою. Благодаря возможности воскрешать союзников и сдерживать натиск врага она создает оазис покоя на жутком поле боя. Sage — аналог медика в Valorant: именно от этого агента поддержки зависит исход многих сражений."
});
});



module.exports = router;

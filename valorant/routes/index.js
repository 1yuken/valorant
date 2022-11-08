var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Карамельки */
router.get('/chamber', function(req, res, next) {
  res.send("<h1>Chamber page</h1>")
});

/* Страница Карамельки */
router.get('/jett', function(req, res, next) {
  res.send("<h1>Jett page</h1>")
});

/* Страница Карамельки */
router.get('/sage', function(req, res, next) {
  res.send("<h1>Sage page</h1>")
});



module.exports = router;

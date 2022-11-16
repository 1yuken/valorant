var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Чембера */
router.get('/chamber', function(req, res, next) {
  res.render('valo', {
    title: "Chamber",
    picture: "images/chamber.png",
    desc: "Chamber is one of four Agents in VALORANT that serve the role of Sentinel. These Agents focus on defensive play through recon, healing, and similar abilities. Chamber sets himself apart from the other Sentinels by packing an equally powerful punch on offense."
});
});


/* Страница Джетт */
router.get('/jett', function(req, res, next) {
  res.render('valo', {
    title: "Jett",
    picture: "images/jett.jpg",
    desc: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them."
});
});


/* Страница Сейдж */
router.get('/sage', function(req, res, next) {
  res.render('valo', {
    title: "Sage",
    picture: "images/Sage.jpg",
    desc: "Sage is a VALORANT agent, whose abilities make her a key support in the game. Sage equips various orbs which can slow enemies, heal allies, or erect walls to control the battlefield. Her ultimate, Resurrection, can even bring dead allies back to life, swinging the balance of power in a match in seconds."
});
});



module.exports = router;

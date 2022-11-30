var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Val = require("./models/valo").Val


var val = new Val({
title: "Chamber",
nick: "chamber"
})


console.log(val)
val.save(function(err, val, affected){
console.log(val.title)
})
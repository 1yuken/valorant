var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/valorant')
var Agent = require("../models/agent").Agent


var agent = new Agent({
title: "chamber",
nick: "chamber"
})


console.log(agent)
agent.save(function(err, agent, affected){
console.log(agent.title)
})
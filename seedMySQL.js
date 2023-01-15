var mysql = require('mysql2');

var drop = 'TRUNCATE TABLE agents;'
var seedQuery = 'INSERT INTO agents (title, nick, avatar, about) VALUES ("Chamber", "chamber", "/images/chamber.png", "Chamber is one of four Agents in VALORANT that serve the role of Sentinel. These Agents focus on defensive play through recon, healing, and similar abilities. Chamber sets himself apart from the other Sentinels by packing an equally powerful punch on offense."), ("Jett", "jett", "/images/jett.jpg", "Representing her home country of South Korea, Jetts agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them."), ("Sage", "sage", "/images/sage.jpg", "Sage is a VALORANT agent, whose abilities make her a key support in the game. Sage equips various orbs which can slow enemies, heal allies, or erect walls to control the battlefield. Her ultimate, Resurrection, can even bring dead allies back to life, swinging the balance of power in a match in seconds.");'

var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : '16Osman16Yuken16',
database: 'valorant'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})
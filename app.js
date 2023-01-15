var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/valorant')
var session = require("express-session")
var mysql2 = require('mysql2/promise');
var MySQLStore = require('express-mysql-session')(session);

var agents = require('./routes/agents');
var Agent = require("./models/agent").Agent

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var options = {
  host : '127.0.0.1',
  port: '3306',
  user : 'root',
  password : '16Osman16Yuken16',
  database: 'valorant'
  };
  var connection = mysql2.createPool(options)
  var sessionStore = new MySQLStore(options, connection);

// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//var MongoStore = require('connect-mongo'); (session);
// app.use(session({
//  secret: "valorant",
//  cookie:{maxAge:60*1000},
//  resave: true,
//  saveUninitialized: true,	
//  store: MongoStore.create({mongoUrl: 'mongodb://127.0.0.1:27017/valorant'})
// }))
app.use(session({
  secret: 'valorant',
  key: 'sid',
  store: sessionStore,
  resave: true,
  saveUninitialized: true,
  cookie: { path: '/',
  httpOnly: true,
  maxAge: 60*1000
  }
  }));

app.use(function(req,res,next){
  req.session.counter = req.session.counter +1 || 1
  next()
})

app.use(function(req,res,next){
  res.locals.nav = []

  Agent.find(null,{_id:0,title:1,nick:1},function(err,result){
      if(err) throw err
      res.locals.nav = result
      next()
  })
})

app.use(require("./middleware/createUser.js"))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/agents', agents);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',
  {
    picture: "../images/error.png",
    title: 'Ошибка, проверьте корректность запроса.'
  });
});

module.exports = app;
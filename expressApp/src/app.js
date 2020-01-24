/* eslint-disable no-unused-vars */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var sysRouter = require('./routes/sys');

var env = require('../config/environment/index');
var envValue = env.API_ORIGIN();

var app = express();
console.log("env:"+app.get('env'));
console.log("env2:"+process.env.NODE_ENV);
console.log("env3:"+envValue);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/sys', sysRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({returnmessage:"error"});
  //res.render('error');
});

module.exports = app;

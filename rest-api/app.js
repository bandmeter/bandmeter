'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var	session = require('express-session');

//Ruteo
var user_routes = require('./routes/user');
var notification_routes = require('./routes/notification');
var jamroom_routes = require('./routes/jamroom');
var band_routes = require('./routes/band');
var song_routes = require('./routes/song');
//var track_routes = require('./routes/track');

//cargamos middlewares
app.use(cookieParser());
app.use(session({
	secret: 'b4ndm3t3r',
    resave:true,
    saveUninitialized:true,
    cookie:{httpOnly: false, secure: false}
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Cargo rutas
app.use('/api', user_routes);
app.use('/api', notification_routes);
app.use('/api', band_routes);
app.use('/api', song_routes);
//app.use('/api', track_routes);
app.use('/api', jamroom_routes);

module.exports = app;
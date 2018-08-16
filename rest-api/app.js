'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Ruteo
var user_routes = require('./routes/user');

//cargamos middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Cargo rutas
app.use('/api', user_routes);

module.exports = app;
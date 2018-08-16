'use strict';

var mongoose = require('mongoose');
var app = require('./app');

var port = 3600;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/bandmeter', {useNewUrlParser: true})
        .then(() => {
            console.log("La conexión a la BBDD se ha realizado");
            app.listen(port, ()=>{
                console.log("El servidor está corriendo en http://localhost:"+port);
            })
        })
        .catch(err=>{console.log(err)});
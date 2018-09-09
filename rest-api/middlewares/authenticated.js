'use strict';

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'B4ndm3t3r';

exports.ensureAuth = function(req, res, next){
    console.log("La llamada: ", req);
    if(!req.headers.authorization){
        res.status(403).send({
            message: "No tienes permisos para hacer esta llamada"
        });
    }else{
        var token = req.headers.authorization.replace(/['"]+/g, '').replace("Bearer ", "");
        try{
            var payload = jwt.decode(token, secret);
            if(payload.exp > moment.unix()){
                return res.status(401).send({
                    message:"El token ha expirado"
                });
            }
        } catch(ex){
            return res.status(404).send({
                message: "El token no es válido"
            });
        }
        req.user = payload;
        next();
    }
}
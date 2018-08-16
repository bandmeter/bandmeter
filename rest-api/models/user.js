'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
    fullname: String,
    email: String,
    password: String,
    image: String
});

module.exports = mongoose.model('User', UserSchema);
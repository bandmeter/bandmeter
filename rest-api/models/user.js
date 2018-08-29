'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	fullname: {type: String},
	email: {type: String, index:{unique:true}},
	slug: {type:String, index:{unique:true}},
    token: {type:String},
    fbId: {type:String, index:{unique:true}},
	password: {type: String},
	active: {type: Boolean, default: 0},
	status:{type:String},
	country: {type: String},
	city: {type: String},
	image:{type:String},
	backgroundImage:{type:String},
	instruments: [{instrument:{type: Schema.Types.ObjectId, ref:'Instrument'}}],
	notifications: [{notification:{type: Schema.Types.ObjectId, ref:'Notification'}}],
	bands: [{band:{type: Schema.Types.ObjectId, ref: 'Band'}}],
	friends: [{friend:{type: Schema.Types.ObjectId, ref: 'User'}}],
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});


module.exports = mongoose.model('User', UserSchema);
'use strict';

var express = require('express');

var UserCtrl = require('../controllers/user');

var user = express.Router();

var md_auth = require('../middlewares/authenticated');

user.route('/user/login')
	.post(UserCtrl.login);

user.route('/user/register')
	.post(UserCtrl.addUser);

user.route('/user/logout')
	.post(UserCtrl.logout);

user.route('/users')
	.get(UserCtrl.findAllUsers)
	.post(UserCtrl.addUser);

user.route('/usersonline')
	.get(UserCtrl.findUsersOnline);

user.route('/search/:nickname')
	.get(UserCtrl.findAllUsersByNickname)

user.route('/user/:id')
	.get(UserCtrl.findById)
	.post(UserCtrl.updateUser)
	.delete(UserCtrl.deleteUser);

user.route('/friend/:id')
	.post(UserCtrl.addFriend)
    .delete(UserCtrl.deleteFriend);
    
user.route('/profile/:slug')
.get(UserCtrl.findBySlug);

user.route('/islogged')
.post(UserCtrl.islogged);

user.route('/activate/:token')
.post(UserCtrl.activate);

module.exports = user;
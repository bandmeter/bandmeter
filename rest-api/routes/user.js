'use strict';

var express = require('express');

var UserCtrl = require('../controllers/user');

var user = express.Router();

var md_auth = require('../middlewares/authenticated');

user.route('/user/login')
	.post(UserCtrl.login);

user.route('/user/login-fb')
	.post(UserCtrl.loginFacebook);

user.route('/user/register')
	.post(UserCtrl.addUser);

user.route('/user/register-fb')
	.post(UserCtrl.addUserFacebook);

user.route('/user/logout')
	.post(md_auth.ensureAuth, UserCtrl.logout);

user.route('/users')
	.get(md_auth.ensureAuth, UserCtrl.findAllUsers);

user.route('/usersonline')
	.get(md_auth.ensureAuth,UserCtrl.findUsersOnline);

/*user.route('/search/:nickname')
	.get(md_auth.ensureAuth,UserCtrl.findAllUsersByNickname)*/

user.route('/user/:id')
	.get(md_auth.ensureAuth,UserCtrl.findById)
	.post(md_auth.ensureAuth,UserCtrl.updateUser)
	.delete(md_auth.ensureAuth,UserCtrl.deleteUser);

user.route('/friend/:id')
	.post(md_auth.ensureAuth,UserCtrl.addFriend)
    .delete(md_auth.ensureAuth,UserCtrl.deleteFriend);
    
user.route('/profile/:slug')
.get(md_auth.ensureAuth,UserCtrl.findBySlug);

user.route('/islogged')
.post(md_auth.ensureAuth,UserCtrl.islogged);

user.route('/activate/:token')
.post(UserCtrl.activate);

module.exports = user;
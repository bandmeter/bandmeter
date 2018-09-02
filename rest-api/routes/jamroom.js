'use strict';
var express = require('express');
var JamRoomCtrl = require('../controllers/jamroom');
var md_auth = require('../middlewares/authenticated');

var jamroom = express.Router();

jamroom.route('/jamrooms')
	.get(md_auth.ensureAuth,JamRoomCtrl.findAllJamRooms)
	.post(md_auth.ensureAuth,JamRoomCtrl.addJamRoom);

jamroom.route('/jamroom/:id')
	.put(md_auth.ensureAuth,JamRoomCtrl.updateJamRoom)
	.delete(md_auth.ensureAuth,JamRoomCtrl.deleteJamroom);

jamroom.route('/jamroom/:slug')
	.get(md_auth.ensureAuth,JamRoomCtrl.findBySlug);

jamroom.route('/searchjamroom/:name')
	.get(md_auth.ensureAuth,JamRoomCtrl.findByName);

    module.exports = jamroom;

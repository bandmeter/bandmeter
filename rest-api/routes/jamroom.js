'use strict';
var express = require('express');
var JamRoomCtrl = require('../controllers/jamroom');

var jamroom = express.Router();

jamroom.route('/jamrooms')
	.get(JamRoomCtrl.findAllJamRooms)
	.post(JamRoomCtrl.addJamRoom);

jamroom.route('/jamroom/:id')
	.put(JamRoomCtrl.updateJamRoom)
	.delete(JamRoomCtrl.deleteJamroom);

jamroom.route('/jamroom/:slug')
	.get(JamRoomCtrl.findBySlug);

jamroom.route('/searchjamroom/:name')
	.get(JamRoomCtrl.findByName);

    module.exports = jamroom;

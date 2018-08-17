'use strict';
var express = require('express');
var SongCtrl = require('../controllers/song');

var song = express.Router();

song.route('/song')
	.post(SongCtrl.addSong);

song.route('/songs/:idAlbum')
	.get(SongCtrl.findByAlbum);

song.route('/song/:id')
	.get(SongCtrl.findById)
	.put(SongCtrl.updateSong)
    .delete(SongCtrl.deleteSong);
    
module.exports = song;
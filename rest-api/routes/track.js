'use strict';
var express = require('express');
var TrackCtrl = require('../controllers/track');

var track = express.Router();

track.route('/track')
	.post(TrackCtrl.add);

track.route('/tracks/:idSong')
	.get(TrackCtrl.findByBand);

track.route('/track/:id')
	.get(TrackCtrl.findById)
	.put(TrackCtrl.updateTrack)
    .delete(TrackCtrl.deleteTrack);
    
module.exports = track;
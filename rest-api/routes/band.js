'use strict';
var express = require('express');
var BandCtrl = require('../controllers/band');

var band = express.Router();

band.route('/bands')
	.get(BandCtrl.findAllBands)
	.post(BandCtrl.addBand);

band.route('/band/:id')
	.get(BandCtrl.findById)
	.put(BandCtrl.updateBand)
	.delete(BandCtrl.deleteBand);

band.route('/band/:slug')
	.get(BandCtrl.findBySlug);

band.route('/searchband/:name')
    .get(BandCtrl.findByName);
    
module.exports = band;
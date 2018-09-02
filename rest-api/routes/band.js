'use strict';
var express = require('express');
var BandCtrl = require('../controllers/band');

var md_auth = require('../middlewares/authenticated');

var band = express.Router();

band.route('/bands')
	.get(md_auth.ensureAuth,BandCtrl.findAllBands)
	.post(md_auth.ensureAuth,BandCtrl.addBand);

band.route('/band/:id')
	.get(md_auth.ensureAuth,BandCtrl.findById)
	.put(md_auth.ensureAuth,BandCtrl.updateBand)
	.delete(md_auth.ensureAuth,BandCtrl.deleteBand);

band.route('/band/:slug')
	.get(md_auth.ensureAuth,BandCtrl.findBySlug);

band.route('/searchband/:name')
    .get(md_auth.ensureAuth,BandCtrl.findByName);
    
module.exports = band;
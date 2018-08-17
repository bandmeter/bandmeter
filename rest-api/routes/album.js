'use strict';
var express = require('express');
var AlbumCtrl = require('../controllers/album');

var album = express.Router();

album.route('/album')
	.post(AlbumCtrl.addAlbum);

album.route('/albums/:idBand')
	.get(AlbumCtrl.findByBand);

album.route('/album/:id')
	.get(AlbumCtrl.findById)
	.put(AlbumCtrl.updateAlbum)
    .delete(AlbumCtrl.deleteAlbum);
    
module.exports = album;
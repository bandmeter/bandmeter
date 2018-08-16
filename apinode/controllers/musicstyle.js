var mongoose = require('mongoose');
var MusicStyle = mongoose.model('MusicStyle');

exports.findAllMusicStyles = function(req,res){
	MusicStyle.find(function(err,musicstyles){
		if(err) res.send(500, err.message);

		console.log('GET /musicstyle')
			res.status(200).jsonp(musicstyles);
	});
}

exports.findByName = function(req,res){
	MusicStyle.findOne(req.params.name, function(err,musicstyle){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(musicstyle);
	});
}

exports.findById = function(req,res){
	MusicStyle.findById(req.params.id, function(err,musicstyle){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(musicstyle);
	});
}

exports.addMusicStyle = function(req,res){
	var musicstyle = new MusicStyle({
		name: req.body.name,
	});
	musicstyle.save(function(err,musicstyle){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(musicstyle);
	});
}

exports.updateMusicStyle = function(req,res){
	MusicStyle.findById(req.params.id, function(err, musicstyle){
		MusicStyle.name = req.body.name;
		musicstyle.save(function(err){
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(musicstyle);
		});
	});
}

exports.deleteMusicStyle = function(req,res){
	MusicStyle.findById(req.params.id, function(err,musicstyle){
		musicstyle.remove(function(err){
			if(err) return res.send(500, err.message);
			res.status(200);
		});
	});
}

var Song = require('../models/song');

exports.findAllSongs = function(req,res){
	Song.find(function(err,songs){
		if(err) res.send(500, err.message);
		res.status(200).jsonp(songs);
	});
}

exports.findBySlug = function(req,res){
	Song.findOne({slug:req.params.slug},function(err, song){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(song);
	});
}

exports.findByName = function(req,res){
	Song.findOne({name:{ $regex : new RegExp(req.params.name, "i") }},function(err, song){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(song);
	});
}

exports.findByAlbum = function(req,res){
	Song.findOne(req.params.idAlbum, function(err,song){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(song);
	});
}

exports.findById = function(req,res){
	Song.findById(req.params.id, function(err,bsongand){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(song);
	});
}

exports.addSong = function(req,res){
	if(authed[sessionID]){
		var slug = req.body.name.toLowerCase().replace(' ','-').replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('ñ','gn');
		var song = new Song({
			name: req.body.name,
			slug: slug,
		});
		song.save(function(err,song){
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(song);
		});
	}else{
		res.send(403, 'Access Forbidden');
	}
}

exports.updateSong = function(req,res){
	if(authed[sessionID]){
		Band.findById(req.params.id, function(err, song){
			var slug = req.body.name.toLowerCase().replace(' ','-').replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('ñ','gn');
			band.name = req.body.name;
			band.slug = slug;
			song.save(function(err){
				if(err) return res.send(500, err.message);
				res.status(200).jsonp(song);
			});
		});
	}else{
		res.send(403, 'Access Forbidden');
	}
}

exports.deleteSong = function(req,res){
	if(authed[sessionID]){
		Song.findById(req.params.id, function(err,song){
			song.remove(function(err){
				if(err) return res.send(500, err.message);
				res.status(200);
			});
		});
	}else{
		res.send(403, 'Access Forbidden');
	}
}

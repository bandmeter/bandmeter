var mongoose = require('mongoose');
var Band = mongoose.model('Band');

exports.findAllBands = function(req,res){
	Band.find(function(err,bands){
		if(err) res.send(500, err.message);
		res.status(200).jsonp(bands);
	});
}

exports.findBySlug = function(req,res){
	Band.findOne({slug:req.params.slug},function(err, band){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(band);
	});
}

exports.findByName = function(req,res){
	Band.findOne({name:{ $regex : new RegExp(req.params.name, "i") }},function(err, band){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(band);
	});
}

exports.findByName = function(req,res){
	Band.findOne(req.params.name, function(err,band){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(band);
	});
}

exports.findById = function(req,res){
	Band.findById(req.params.id, function(err,band){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(band);
	});
}

exports.addBand = function(req,res){
	if(authed[sessionID]){
		var slug = req.body.name.toLowerCase().replace(' ','-').replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('ñ','gn');
		var band = new Band({
			name: req.body.name,
			slug: slug,
			logo: req.body.logo,
			imageBand: req.body.imageBand,
			musicStyle: req.body.musicStyle,
			members: req.body.members
		});
		band.save(function(err,band){
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(band);
		});
	}else{
		res.send(403, 'Access Forbidden');
	}
}

exports.updateBand = function(req,res){
	if(authed[sessionID]){
		Band.findById(req.params.id, function(err, band){
			var slug = req.body.name.toLowerCase().replace(' ','-').replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('ñ','gn');
			band.name = req.body.name;
			band.slug = slug;
			band.logo = req.body.logo;
			band.imageBand = req.body.imageBand;
			band.musicStyle = req.body.musicStyle;
			band.members = req.body.members;
			band.save(function(err){
				if(err) return res.send(500, err.message);
				res.status(200).jsonp(band);
			});
		});
	}else{
		res.send(403, 'Access Forbidden');
	}
}

exports.deleteBand = function(req,res){
	if(authed[sessionID]){
		Band.findById(req.params.id, function(err,band){
			band.remove(function(err){
				if(err) return res.send(500, err.message);
				res.status(200);
			});
		});
	}else{
		res.send(403, 'Access Forbidden');
	}
}

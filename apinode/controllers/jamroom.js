var mongoose = require('mongoose');
var JamRoom = mongoose.model('JamRoom');
var slugify = require('slugify');

exports.findAllJamRooms = function(req,res){
	JamRoom.find(function(err,jamrooms){
		if(err) res.send(500, err.message);
			res.status(200).jsonp(jamrooms);
	});
}

exports.findBySlug = function(req,res){
	JamRoom.find(req.params.slug, function(err,jamroom){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(jamroom);
	});
}

exports.findByName = function(req,res){
	JamRoom.find({name:{ $regex : new RegExp(req.params.name, "i") }}, function(err,jamroom){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(jamroom);
	});
}

exports.addJamRoom = function(req,res){
	var slug = slugify(req.body.name);
	var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

	var token = text;
	var jamroom = new JamRoom({
		name: req.body.name,
		token: text,
		slug: slug,
		owner: req.body.owner
	});
	jamroom.save(function(err,jamroom){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(jamroom);
	});
}

exports.updateJamRoom = function(req,res){
	JamRoom.findById(req.params.id, function(err, jamroom){
		jamroom.member = req.body.user;
		jamroom.save(function(err){
		if(err) return res.send(500, err.message);
			res.status(200).jsonp(jamroom);
		});
	});
}

exports.deleteJamroom = function(req,res){
	JamRoom.findById(req.params.id, function(err,jamroom){
		jamroom.remove(function(err){
			if(err) return res.send(500, err.message);
			res.status(200).send('ok');
		});
	});
}
var mongoose = require('mongoose');
var Usertype = mongoose.model('Usertype');

exports.findAllUserTypes = function(req,res){
	console.log('entra');
	Usertype.find(function(err,usertypes){
		if(err) res.send(500, err.message);

		console.log('GET /usertypes')
			res.status(200).jsonp(usertypes);
	});
}

exports.findById = function(req,res){
	Usertype.findById(req.params.id, function(err,usertype){
		if(err) return res.send(500, err.message);
		console.log('GET /usertype/'+req.params.id);
		res.status(200).jsonp(usertype);
	});
}

exports.addUserType = function(req,res){
	var usertype = new Usertype({
		name: req.body.name,
		permissions: req.body.permissions
	});
	usertype.save(function(err,usertype){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(usertype);
	});
}

exports.updateUserType = function(req,res){
	Usertype.findById(req.params.id, function(err, usertype){
		Usertype.name = req.body.name;
		Usertype.permissions = req.body.permissions;
		usertype.save(function(err){
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(usertype);
		});
	});
}

exports.deleteUserType = function(req,res){
	Usertype.findById(req.params.id, function(err,usertype){
		usertype.remove(function(err){
			if(err) return res.send(500, err.message);
			res.status(200);
		});
	});
}

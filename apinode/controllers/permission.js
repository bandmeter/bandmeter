var mongoose = require('mongoose');
var Permission = mongoose.model('Permission');

exports.findAllPermissions = function(req,res){
	Permission.find(function(err,permissions){
		if(err) res.send(500, err.message);
		res.status(200).jsonp(permissions);
	});
}

exports.findByName = function(req,res){
	Permission.findOne(req.params.name, function(err,permission){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(permission);
	});
}

exports.findById = function(req,res){
	Permission.findById(req.params.id, function(err,permission){
		if(err) return res.send(500, err.message);
		console.log('GET /permission/'+req.params.id);
		res.status(200).jsonp(permission);
	});
}

exports.addPermission = function(req,res){
	var permission = new Permission({
		name: req.body.name,
	});
	permission.save(function(err,permission){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(permission);
	});		
}

exports.updatePermission = function(req,res){
	Permission.findById(req.params.id, function(err, permission){
		permission.name = req.body.name;
		permission.save(function(err){
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(permission);
		});
	});
}

exports.deletePermission = function(req,res){
	Permission.findById(req.params.id, function(err,permission){
		permission.remove(function(err){
			if(err) return res.send(500, err.message);
			res.status(200);
		});
	});
}

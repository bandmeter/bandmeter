var mongoose = require('mongoose');
var NotificationType = mongoose.model('NotificationType');

exports.findByName = function(req,res){
	NotificationType.findOne(req.params.name, function(err,notificationtype){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(notificationtype);
	});
}

exports.findById = function(req,res){
	Instrument.findById(req.params.id, function(err,notificationtype){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(notificationtype);
	});
}

exports.addNotificationType = function(req,res){
	var notificationtype = new NotificationType({
		name: req.body.name,
	});
	notificationtype.save(function(err,notificationtype){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(notificationtype);
	});
}

exports.updateNotificationType = function(req,res){
	NotificationType.findById(req.params.id, function(err, notificationtype){
		notificationtype.name = req.body.name;
		notificationtype.save(function(err){
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(notificationtype);
		});
	});
}

exports.deleteNotificationType = function(req,res){
	NotificationType.findById(req.params.id, function(err,notificationtype){
		notificationtype.remove(function(err){
			if(err) return res.send(500, err.message);
			res.status(200).send('ok');
		});
	});
}

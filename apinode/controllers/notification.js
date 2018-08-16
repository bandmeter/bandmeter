var mongoose = require('mongoose');
var Notification = mongoose.model('Notification');

exports.findByUser = function(req,res){
	Notification.find({receiver:req.params.idUser}, function(err,notification){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(notification);
	});
}

exports.findById = function(req,res){
	Notification.findById(req.params.id, function(err,notification){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(notification);
	});
}

exports.addNotification = function(req,res){
	var notification = new Notification({
		sender: req.body.sender,
		receiver: req.body.receiver,
		message: req.body.message,
		notificationtype: req.body.notificationtype
	});
	notification.save(function(err,notification){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(notification);
	});
}

exports.updateNotification = function(req,res){
	Notification.findById(req.params.id, function(err, notification){
		notification.read = true;
		notification.save(function(err){
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(notification);
		});
	});
}

exports.deleteNotification = function(req,res){
	Notification.findById(req.params.id, function(err,notification){
		notification.remove(function(err){
			if(err) return res.send(500, err.message);
			res.status(200).send('ok');
		});
	});
}
var mongoose = require('mongoose');
var User = mongoose.model('User');
var authed = [];
//var nodemailer = require('nodemailer');
var emailjs = require('emailjs');

exports.activate = function(req,res){
	User.findOne({token:req.params.token}, function(err,user){
		if(err) res.send(500, err.message);
		if(user!== null){
			user.active = true;
			user.save(function(err){
				if(err) return res.send(500, err.message);
				res.status(200).jsonp(user);
			});
		}else{
			res.status(200).send('ko');
		}
	});
}

exports.findAllUsers = function(req,res){
	User.find(function(err,users){
		if(err) res.send(500, err.message);
		res.status(200).jsonp(users);
	});
}

exports.findById = function(req,res){
	User.findById(req.params.id, function(err,user){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(user);
	});
}

exports.findBySlug = function(req,res){
	User.findOne({slug:req.params.slug},function(err, user){
		if(err) return res.send(500, err.message);
		console.log('GET /user/'+req.params.slug);
		res.status(200).jsonp(user);
	});
}

exports.findAllUsersByName = function(req,res){
	User.find({fullname:{ $regex : new RegExp(req.params.name, "i") },active:true},function(err, user){
		if(err) return res.send(500, err.message);
		console.log('GET /user/'+req.params.name);
		res.status(200).jsonp(user);
	});
}

exports.findAllUsersByNickname = function(req,res){
	User.find({nickname:{ $regex : new RegExp(req.params.nickname, "i") },active:true},function(err, user){
		if(err) return res.send(500, err.message);
		console.log('GET /user/'+req.params.name);
		res.status(200).jsonp(user);
	});
}

exports.findByInstrument = function(req,res){
	User.find({instruments:req.params.instrument},function(err, user){
		if(err) return res.send(500, err.message);
		console.log('GET /users/'+req.params.instrument);
		res.status(200).jsonp(user);
	});
}

exports.findUsersOnline = function(req,res){
	User.find({status:'logged'},function(err, user){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(user);
	});
}

exports.addUser = function(req,res){
	var crypto = require('crypto');

	var password = crypto.createHmac('sha1', new Buffer(req.body.mail,'utf-8')).update(new Buffer(req.body.password,'utf-8')).digest('hex');
	var slug = req.body.username.toLowerCase().replace(' ','-').replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace('ñ','gn');

	var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

	var token = text;
	var user = new User({
		fullname: req.body.fullname,
		nickname: req.body.username,
		slug: slug,
		token: token,
		email: req.body.mail,
		password: password,
	});
	user.save(function(err,user){
		if(err) return res.status(500).send(err.message);
		var html = '<h4>Hello '+user.fullname+'</h4><p>Click <a href="http://bandmeter.com/activate/'+token+'">here</a> to activate your account at BandMeter.com</p><p>The Bandmeter.com team</p>';
		var server = emailjs.server.connect({
	        user:"oscarfernandezamo@gmail.com",
	        password:"Oscar@1974",
	        host:"smtp.gmail.com",
	        ssl:true
	    });

		var message = {
		   text:    "i hope this works", 
		   from:    "bandmeter.com <no-replay@bandmeter.com>", 
		   to:      user.email,
		   subject: "Bandmeter account activation",
		   attachment: 
		   [
		      {data:"<html>"+html+"</html>", alternative:true},
		   ]
		};

		// send the message and get a callback with an error or details of the message that was sent
		server.send(message, function(err, message) { console.log(err || message); });
		res.status(200).jsonp(user);
	});
}

exports.login = function(req,res){
	var crypto = require('crypto');
	var password = crypto.createHmac('sha1', new Buffer(req.body.email,'utf-8')).update(new Buffer(req.body.password,'utf-8')).digest('hex');
	User.findOne({'email': req.body.email, 'password':password,'active': true}, function(err, user){
		if(err) return res.status(500).send(err.message);
		if(user !== null){
			authed[user._id] = user;
			user.status = 'logged';
			user.save(function(err){
				if(err) return res.send(500, err.message);
				res.status(200).jsonp(user);
			});
		}else{
			res.status(200).send('ko');
		}

	});
}

exports.islogged = function(req,res){
	if(authed[req.body.userid]){
		res.status(200).send(authed[req.body.userid]);
	}else{
		res.status(200).send('ko');
	}
}

exports.logout = function(req,res){
	User.findOne({'_id': req.body.userid}, function(err,user){
		if(err) return res.status(500).send(err.message);
		if(user !== null){
			user.status = 'offline';
			user.save(function(err){
				if(err) return res.send(500, err.message);
				authed.splice(req.body.userid,1);
				res.status(200).send();
			});
		}else{
			res.status(200).send('ko');
		}
	})
}

exports.updateUser = function(req,res){
	if(authed[req.params.id]){
		User.findById(req.params.id, function(err, user){
			user.fullname = req.body.fullname;
			user.nickname = req.body.nickname;
			user.email = req.body.email;
			user.country = req.body.country;
			user.city = req.body.city;
			user.image = req.body.image;
			user.backgroundImage = req.body.backgroundImage;
			user.instruments = req.body.instruments;

			user.save(function(err){
				if(err) return res.send(500, err.message);
				res.status(200).jsonp(user);
			});
		});
	}else{
		res.send(403, 'Access Forbidden');
	}
}

exports.addFriend = function(req,res){
	if(authed[req.params.id]){
		User.findById(req.params.id, function(err, user){
			user.friends.push(req.body.friend);
			user.save(function(err){
				if(err) return res.send(500, err.message);
				User.findById(req.body.friend, function(err, user){
					user.friends.push(req.params.id);
					user.save(function(err){
						if(err) return res.send(500, err.message);
						User.findById(req.params.id, function(err, user){
							res.status(200).jsonp(user);
						});
					});
				})
			});
		});
	}else{
		res.send(403, 'Access Forbidden');
	}
}

exports.deleteFriend = function(req,res){
	if(authed[req.params.id]){
		User.findById(req.params.id, function(err, user){
			user.friends.splice(user.friends.indexOf(req.body.friend));
			user.save(function(err){
				if(err) return res.send(500, err.message);
				User.findById(req.body.friend, function(err, user){
					user.friends.splice(user.friends.indexOf(req.params.id));
					user.save(function(err){
						if(err) return res.send(500, err.message);
						User.findById(req.params.id, function(err, user){
							res.status(200).jsonp(user);
						});
					});
				})
			});
		});
	}else{
		res.send(403, 'Access Forbidden');
	}
}

exports.deleteUser = function(req,res){
	if(authed[sessionID]){
		User.findById(req.params.id, function(err,user){
			user.remove(function(err){
				if(err) return res.send(500, err.message);
				res.status(200);
			});
		});
	}else{
		res.send(403, 'Access Forbidden');
	}
}

var mongoose = require('mongoose');
var Post = mongoose.model('post');

exports.findAllPosts = function(req,res){
	Post.find(function(err,posts){
		if(err) res.send(500, err.message);
		res.status(200).jsonp(posts);
	});
}

exports.findById = function(req,res){
	Post.findById(req.params.id, function(err,post){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(post);
	});
}

exports.addPost = function(req,res){
	var post = new Post({
		user: req.body.user,
		text: req.body.text,
	});
	post.save(function(err,post){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(post);
	});
}

exports.updatePost = function(req,res){
	Post.findById(req.params.id, function(err, post){
		post.text = req.body.text;
		post.save(function(err){
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(post);
		});
	});
}

exports.deletePost = function(req,res){
	Post.findById(req.params.id, function(err,post){
		post.remove(function(err){
			if(err) return res.send(500, err.message);
			res.status(200).send('ok');
		});
	});
}

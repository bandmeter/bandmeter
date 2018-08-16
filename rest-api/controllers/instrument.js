var mongoose = require('mongoose');
var Instrument = mongoose.model('Instrument');

exports.findAllInstruments = function(req,res){
	Instrument.find(function(err,instruments){
		if(err) res.send(500, err.message);

		console.log('GET /instruments')
			res.status(200).jsonp(instruments);
	});
}

exports.findByName = function(req,res){
	Instrument.findOne(req.params.name, function(err,instrument){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(instrument);
	});
}

exports.findById = function(req,res){
	Instrument.findById(req.params.id, function(err,instrument){
		if(err) return res.send(500, err.message);
		console.log('GET /instrument/'+req.params.id);
		res.status(200).jsonp(instrument);
	});
}

exports.addInstrument = function(req,res){
	var instrument = new Instrument({
		name: req.body.name,
	});
	instrument.save(function(err,instrument){
		if(err) return res.send(500, err.message);
		res.status(200).jsonp(instrument);
	});
}

exports.updateInstrument = function(req,res){
	Instrument.findById(req.params.id, function(err, insturment){
		instrument.name = req.body.name;
		musicstyle.save(function(err){
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(instrument);
		});
	});
}

exports.deleteInstrument = function(req,res){
	Instrument.findById(req.params.id, function(err,instrument){
		instrument.remove(function(err){
			if(err) return res.send(500, err.message);
			res.status(200);
		});
	});
}

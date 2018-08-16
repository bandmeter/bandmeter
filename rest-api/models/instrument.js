var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var instrumentSchema = new Schema({
	name: {type:String, required:true, index: {unique:true}},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Instrument', instrumentSchema);
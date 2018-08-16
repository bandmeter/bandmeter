var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var songSchema = new Schema({
	name:{type:String, required:true},
	tracks:[{track:{type:Schema.Types.ObjectId, ref: "Song"}}],
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}	
});

module.exports = mongoose.model('Song', songSchema);
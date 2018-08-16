var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var albumSchema = new Schema({
	name:{type:String, required:true},
	coverImage: {type:String},
	songs:[{song:{type:Schema.Types.ObjectId, ref: "Song"}}],
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}	
});

module.exports = mongoose.model('Album', albumSchema);

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var trackSchema = new Schema({
	instrument:{type:String, required:true},
	file:[{song:{type:Schema.Types.ObjectId, ref: "Song"}}],
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}	
});

module.exports = mongoose.model('Track', trackSchema);

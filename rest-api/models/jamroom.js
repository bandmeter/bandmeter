var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var jamRoomSchema = new Schema({
	name: {type:String, index:{unique:true}},
	slug: {type:String, index:{unique:true}},
	token: {type:String},
	owner: {type: Schema.Types.ObjectId, ref:"User"},
	members: [{member:{type: Schema.Types.ObjectId, ref:"User"}}],
	finished:{type:Boolean, default: false},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('JamRoom', jamRoomSchema);

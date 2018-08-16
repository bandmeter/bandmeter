var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var instrumentSchema = new Schema({
	name: {type:String, required:true, index: {unique:true}},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

var musicStyleSchema = new Schema({
	name : {type: String, required: true, index: {unique:true}},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

var bandSchema = new Schema({
	name: {type:String, required:true, index: {unique:true}},
	musicStyle: {type:Schema.Types.ObjectId, ref: 'MusicStyle'},
	logo:{type:String, required: true},
	imageBand: {type:String},
	members: [{member:{type: Schema.Types.ObjectId, ref:"User"}}],
	albums: [{album:{type:Schema.Types.ObjectId, ref:"Album"}}],
	collaborators: [{member:{type: Schema.Types.ObjectId, ref:"User"}}],
	slug: {type:String, required:true, index:{unique:true}},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

var albumSchema = new Schema({
	name:{type:String, required:true},
	coverImage: {type:String},
	songs:[{song:{type:Schema.Types.ObjectId, ref: "Song"}}],
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}	
});

var songSchema = new Schema({
	name:{type:String, required:true},
	tracks:[{track:{type:Schema.Types.ObjectId, ref: "Song"}}],
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}	
});

var trackSchema = new Schema({
	instrument:{type:String, required:true},
	file:[{song:{type:Schema.Types.ObjectId, ref: "Song"}}],
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}	
});

var permissionSchema = new Schema({
	name: {type:String, required:true},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

var usertypeSchema = new Schema({
	name: {type:String, required:true},
	permissions: [{permission:{type:Schema.Types.ObjectId, ref: 'Permission'}}],
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

var userSchema = new Schema({
	fullname: {type: String},
	email: {type: String, index:{unique:true}},
	slug: {type:String, index:{unique:true}},
	token: {type:String},
	password: {type: String},
	active: {type: Boolean, default: 0},
	status:{type:String},
	country: {type: String},
	city: {type: String},
	image:{type:String},
	backgroundImage:{type:String},
	instruments: [{instrument:{type: Schema.Types.ObjectId, ref:'Instrument'}}],
	bands: [{band:{type: Schema.Types.ObjectId, ref: 'Band'}}],
	friends: [{friend:{type: Schema.Types.ObjectId, ref: 'User'}}],
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

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

var notificationSchema = new Schema({
	sender: {type: Schema.Types.ObjectId, ref:'User', required: true},
	receiver: {type: Schema.Types.ObjectId, ref: 'User', required: true},
	message: {type: String, required: true},
	notificationtype:{type: String, required: true},
	read: {type: Boolean, default: false},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

var notificationTypeSchema = new Schema({
	name: {type:String, required: true},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}	
});

module.exports = mongoose.model('MusicStyle', musicStyleSchema)
module.exports = mongoose.model('Instrument', instrumentSchema);
module.exports = mongoose.model('Band', bandSchema);
module.exports = mongoose.model('Album', albumSchema);
module.exports = mongoose.model('Song', songSchema);
module.exports = mongoose.model('Track', trackSchema);
module.exports = mongoose.model('Permission', permissionSchema);
module.exports = mongoose.model('Usertype', usertypeSchema);
module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('JamRoom', jamRoomSchema);
module.exports = mongoose.model('Notification', notificationSchema);
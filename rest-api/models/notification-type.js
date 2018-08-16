var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var notificationTypeSchema = new Schema({
	name: {type:String, required: true},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}	
});

module.exports = mongoose.model('NotificationType', notificationTypeSchema);

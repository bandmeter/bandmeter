var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var notificationSchema = new Schema({
	sender: {type: Schema.Types.ObjectId, ref:'User', required: true},
	receiver: {type: Schema.Types.ObjectId, ref: 'User', required: true},
	message: {type: String, required: true},
	notificationtype:{type: String, required: true},
	read: {type: Boolean, default: false},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Notification', notificationSchema);
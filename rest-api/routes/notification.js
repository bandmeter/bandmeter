'use strict';
var express = require('express');
var NotificationCtrl = require('../controllers/notification');

var notification = express.Router();

notification.route('/notifications')
	.post(NotificationCtrl.addNotification);

notification.route('/notifications/:idUser')
	.get(NotificationCtrl.findByUser);

notification.route('/notification/:id')
	.get(NotificationCtrl.findById)
	.put(NotificationCtrl.updateNotification)
    .delete(NotificationCtrl.deleteNotification);
    
module.exports = notification;
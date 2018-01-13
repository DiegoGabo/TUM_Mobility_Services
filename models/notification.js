const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Notification Schema
const NotificationSchema = mongoose.Schema({
	id:{
		type: String,
		required: true
	},
	date: {
		type: String,
		required: false
	},
	hour:{
		type:String,
		required:false
	},
	name:{
		type:String,
		required:false
	},
	problem:{
		type:String,
		required:false
	},
	value:{
		type:String,
		required:false
	},
	type:{
		type:String,
		required:false
	},
	photo:{
		type:String,
		required:false
	},
	triporvehicleNumber:{
		type: String,
		required:false
	},
	employeeNum:{
		type: String,
		required: false
	}
	// trips: [{
	// 	type: Schema.Types.ObjectId, 
	// 	ref: 'bmwdatas'
	// }]
})



const Notification = module.exports = mongoose.model('Notification', NotificationSchema);

// Finf6 Notifications
module.exports.getNotificationsData = (callback, limit) => {
	Notification.find(callback).limit(limit);
}
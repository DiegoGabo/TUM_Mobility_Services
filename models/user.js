const mongoose = require("mongoose");
const Schema = mongoose.Schema
//User Schema
const UserSchema = mongoose.Schema({
	id:{
		type: String,
		required: true
	},
	name: {
		type: String,
		required: false,
		unique: true
	},
	email: {
		type: String,
		unique: true,
		required: false,

	},
	password: {
		type: String,
		required: false
	}, 
	trips: [{
		type: Schema.Types.ObjectId, 
		ref: 'bmwdatas'
	}]
})

const User = module.exports = mongoose.model('User', UserSchema);

// Get all users
module.exports.getUsers = (callback, limit) => {
	User.find(callback).limit(limit);
}
const mongoose = require("mongoose");
const Schema = mongoose.Schema
//User Schema
const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		unique: true,
		required: true,

	},
	password: {
		type: String,
		required: true
	}, 
	trips: [{
		type: Schema.Types.ObjectId, 
		ref: 'Story'
	}]
})

const User = module.exports = mongoose.model('User', UserSchema);

// Get all users
module.exports.getUsers = (callback, limit) => {
	User.find(callback).limit(limit);
}
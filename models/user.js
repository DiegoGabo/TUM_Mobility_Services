const mongoose = require("mongoose");

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
})

const User = module.exports = mongoose.model('User', UserSchema);
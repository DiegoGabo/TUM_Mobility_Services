const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Car Schema
const CarSchema = mongoose.Schema({
	vin:{
		type: String,
		required: true
	},
	model: {
		type: String,
		required: false,
		unique: true
	},
	trips: [{
		type: Schema.Types.ObjectId, 
		ref: 'bmwdatas'
	}]
})

const Car = module.exports = mongoose.model('Car', UserSchema);
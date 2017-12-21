const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Car Schema
const CarSchema = mongoose.Schema({
	vin:{
		type: String,
		required: true,
		unique: true
	},
	model: {
		type: String,
		required: false
	},
	trips: [{
		type: Schema.Types.ObjectId, 
		ref: 'bmwdatas'
	}]
})


CarSchema.index({vin: 1}, {unique: true});

const Car = module.exports = mongoose.model('Car', CarSchema);

// Finf6 Cars
module.exports.getCarsData = (callback, limit) => {
	Car.find(callback).limit(limit);
}
// // Add Cars
// module.exports.addCar = (car, callback) => {
// 	Car.create(car, callback);
// }

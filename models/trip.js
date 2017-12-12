const mongoose = require("mongoose");
const Schema = mongoose.Schema

//User Schema
const TripSchema = mongoose.Schema({
	date: {
		type: Date,
		default: Date.now
	},
	user: {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	bmwdata:{
		type: Schema.Types.ObjectId,
	 	ref: 'bmwdata'
	}
})

const Trip = module.exports = mongoose.model('Trip', TripSchema);

// Get all trips
module.exports.getTrips = (callback, limit) => {
	Trip.find(callback).limit(limit);
}

// Add trip to db
module.exports.addTrip = (trip, callback) => {
	Trip.create(trip, callback);
}

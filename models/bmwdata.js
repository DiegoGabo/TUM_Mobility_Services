const mongoose = require('mongoose');
const Schema = mongoose.Schema


const bmwDataSchema = mongoose.Schema({
	vinBmw:{
		type: String,
		required: false
	},
	lastTripBrakingStars:{
		type: String,
		required:false
	},
	lastTripElectricEnergyConsumptionOverall:{
		type: String,
		required: false
	},
	lastTripRecuperationOverall:{
		type: String,
		required: false
	},
	averageDistanceLongterm:{
		type: String,
		required: false
	},
	displayUnit:{
		type: String,
		required: false
	},
	gpsLat:{
		type: String,
		required: false
	},
	gpsLng:{
		type: String,
		required: false
	},	
	remainingFuel:{
		type: String,
		required: false
	},	
	remainingRange:{
		type: String,
		required: false
	},
	mileage:{
		type: String,
		required: false,
		//unique: true
	},
	heading:{
		type: String,
		required: false
	},
	vehicleStatusLowVoltageBattery:{
		type: String,
		required: false
	},	
	airTemperature:{
		type: String,
		required: false
	},
	segmentLastTripAccelerationStars:{
		type: String,
		required:false
	},
	fuelConsumption:{
		type:String,
		required:false
	},

	user:{
		type: Schema.Types.ObjectId, 
		ref: 'User'
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

//Should change this for specific vinbmw mileage  should be unique.
bmwDataSchema.index({vinBmw: 1,mileage: 1}, {unique: true});

const bmwData = module.exports = mongoose.model('bmwdatas', bmwDataSchema);

// Get bmwdata
module.exports.getbmwData = (callback, limit) => {
	bmwData.find(callback).limit(limit);
}


// Add Bmwdata
module.exports.addbmwData = (bmwdata, callback) => {
	bmwData.create(bmwdata, callback);
}


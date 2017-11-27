const mongoose = require('mongoose');


const bmwDataSchema = mongoose.Schema({
	SegmentLastTripElectricEnergyConsumptionOverall:{
		type: String,
		required: false
	},
	vinBmw:{
		type: String,
		requred: false
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
		required: false
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
	create_date:{
		type: Date,
		default: Date.now
	}
});

const bmwData = module.exports = mongoose.model('bmwdatas', bmwDataSchema);

// Get bmwdata
module.exports.getbmwData = (callback, limit) => {
	bmwData.find(callback).limit(limit);
}


// Add Bmwdata
module.exports.addbmwData = (bmwdata, callback) => {
	bmwData.create(bmwdata, callback);
}


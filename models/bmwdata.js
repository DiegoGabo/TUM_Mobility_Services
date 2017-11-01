const mongoose = require('mongoose');


const bmwDataSchema = mongoose.Schema({
	SegmentLastTripElectricEnergyConsumptionOverall:{
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
	gpsLng:{
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
	create_date:{
		type: Date,
		default: Date.now
	}

});

const bmwData = module.exports = mongoose.model('bmwData', bmwDataSchema);

// Get bmwdata
module.exports.getbmwData = (callback, limit) => {
	bmwData.find(callback).limit(limit);
}


// Add Bmwdata
module.exports.addbmwData = (bmwdata, callback) => {
	bmwData.create(bmwdata, callback);
}


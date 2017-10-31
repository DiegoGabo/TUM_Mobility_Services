const mongoose = require('mongoose');


const bmwdataSchema = mongoose.Schema({
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

const Bmwdata = module.exports = mongoose.model('bmwdata', bmwdataSchema);

// Get bmwdata
module.exports.getBmwdata = (callback, limit) => {
	Genre.find(callback).limit(limit);
}


// Add Bmwdata
module.exports.addBmwdata = (bmwdata, callback) => {
	bmwdata.create(bmwdata, callback);
}


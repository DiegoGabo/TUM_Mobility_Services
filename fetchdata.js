const request = require("request")
const bodyParser = require('body-parser')  //Learn what this is for
const express = require('express'),  //Express will be used for routing
	app = express()


//For json post requests
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

var postConfig = {}
var postSuccessHandler = function(err, httpResponse, body){
	console.log(err)
	console.log('JSON response from the server: ' + body)
}


//Request the data from bmw server and console log it
//setInterval to fetch the data every 10min = 60000ms 1s = 1000ms 1min = 60000 10min = 600000ms
exports.fetchBMWdata = function (options){

//setInterval(function(){
request.get(options, (error, response, body) => {
	json = JSON.parse(body)
	vin = options.vin
	//console.log(json.telematicKeyValues.length)
	for (index = 0; index < json.telematicKeyValues.length; index++){
		if(json.telematicKeyValues[index].name === "bmwcardata_gpsLat"){
			gpsLat = json.telematicKeyValues[index].value
		}
		if(json.telematicKeyValues[index].name === "bmwcardata_gpsLng"){
			gpsLng = json.telematicKeyValues[index].value
		}
		if(json.telematicKeyValues[index].name === "bmwcardata_remainingFuel"){
			remainingFuel = json.telematicKeyValues[index].value
		}
		if(json.telematicKeyValues[index].name === "bmwcardata_airTemperature"){
			airTemperature = json.telematicKeyValues[index].value
		}
		if(json.telematicKeyValues[index].name === "bmwcardata_kombiCurrentRemainingRangeFuel"){
			remainingRange = json.telematicKeyValues[index].value
		}
		if(json.telematicKeyValues[index].name === "bmwcardata_mileage"){
			mileage = json.telematicKeyValues[index].value
		}
		if(json.telematicKeyValues[index].name === "bmwcardata_SegmentLastTripAccelerationStars"){
			SegmentLastTripAccelerationStars = json.telematicKeyValues[index].value
		}
		if(json.telematicKeyValues[index].name === "bmwcardata_SegmentLastTripBrakingStars"){
			lastTripBrakingStars = json.telematicKeyValues[index].value
		}
		if(json.telematicKeyValues[index].name === "bmwcardata_SegmentLastTripElectricEnergyConsumptionOverall"){
			lastTripElectricEnergyConsumptionOverall = json.telematicKeyValues[index].value
		}
		if(json.telematicKeyValues[index].name === "bmwcardata_SegmentLastTripRecuperationOverall"){
			lastTripRecuperationOverall = json.telematicKeyValues[index].value
		}

	}

	data = {
		'vinBmw': vin,
		'gpsLat': gpsLat,
		'gpsLng': gpsLng,
		'remainingFuel': remainingFuel,
		'airTemperature': airTemperature,
		'remainingRange': remainingRange,
		'mileage': mileage,
		"segmentLastTripAccelerationStars": SegmentLastTripAccelerationStars,
		"lastTripBrakingStars": lastTripBrakingStars,
		"lastTripElectricEnergyConsumptionOverall": lastTripElectricEnergyConsumptionOverall,
		"lastTripRecuperationOverall": lastTripRecuperationOverall
	}

	//console.log(gpsLat, gpsLng)
	//Making a post request with the given data above to production server or the developmemnt server
	postConfig = {
		//production settings
		//url: 'https://bemostwanted.herokuapp.com/api/bmwdata',
		//development setting
		url: 'http://localhost:3000/api/bmwdata',
		form: data 
	}
	console.log(postConfig)
	request.post(postConfig, postSuccessHandler);

})
//},  60000)
}

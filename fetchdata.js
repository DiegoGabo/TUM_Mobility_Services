const request = require("request")
const bodyParser = require('body-parser')  //Learn what this is for
const express = require('express'),  //Express will be used for routing
	app = express()
let old_mileage = ""
let new_mileage = ""

//For json post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var postConfig = {}
var postSuccessHandler = function(err, httpResponse, body){
	console.log(err)
	console.log('JSON response from the server: ' + body)
}


//Request the data from bmw server and console log it
//setInterval to fetch the data every 10min = 60000ms 1s = 1000ms 1min = 60000 10min = 600000ms
//If interval is set to 1ms, 10ms, one would get the error of vin is not defined!!Set it at least 1000ms
exports.fetchBMWdata = function (options){

//setInterval(function(){
request.get(options, (error, response, body) => {
	try
	{
	json = JSON.parse(body)
	vin = options.vin
	//console.log(json.telematicKeyValues)
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
			new_mileage = mileage
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
	}
	catch(e)
	{
		console.log('malformed request', body);
	}
	if(old_mileage !== new_mileage){
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
	//Making a post request with the given data above to production server or the developmemnt server
	postConfig = {
		//production settings
		//url: 'https://bemostwanted.herokuapp.com/api/bmwdata',
		//development setting
		url: 'http://localhost:3000/api/bmwdata',
		form: data 
	}
	old_mileage = new_mileage
	console.log(postConfig)
	request.post(postConfig, postSuccessHandler);
	}

})
//},  1000)
}

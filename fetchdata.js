const request = require("request")
const bodyParser = require('body-parser')  //Learn what this is for
const express = require('express'),  //Express will be used for routing
	app = express()
const mongoose = require('mongoose') //Database mongodb connection
const config = require('./config/database')

//database connect
mongoose.connect(config.database)
var db = mongoose.connection
var dev_url = config.dev_url
var prod_url = config.prod_url
// Tihs returns promise
 
// db.once('open',function(){
// 	query = {"name": "Max"}
// 	var user = User.findOne(query)
// 	console.log('user', user)
// })


//For json post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var postConfig = {}
var postSuccessHandler = function(err, httpResponse, body){
	// console.log(err)
	console.log('JSON response from the server: ' + body)
}


//Request the data from bmw server and console log it
//setInterval to fetch the data every 10min = 60000ms 1s = 1000ms 1min = 60000 10min = 600000ms
//If interval is set to 1ms, 10ms, one would get the error of vin is not defined!!Set it at least 1000ms
exports.fetchBMWdata = function (options){

setInterval(function(){
request.get(options, (error, response, body) => {
	try
	{
		json = JSON.parse(body)
		vin = options.vin
		// url = 'http://localhost:3000/api?vinBmw=' + vin
		// request.get(url,(error,response,body)=>{
		// 	old_mileage = JSON.parse(body)[0].mileage
		// 	console.log(old_mileage)
		// })

		// query = {"vinBmw": vin}
		// db.collection('bmwdatas').find(query).sort({"create_date": -1}).limit(1).toArray((err,result) =>{
		// 	if(err) return console.log(err)
		// 	console.log("old mileage",result[0].mileage)
		// 	old_mileage = result[0].mileage
		// })
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


		// if(old_mileage != mileage){
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
			url: prod_url + 'api/bmwdata',
			//development setting
			//url: dev_url +'api/bmwdata',
			form: data 
		}
		console.log("PostConfig",postConfig)
		request.post(postConfig, postSuccessHandler);
		// }
		// else{
		// 	console.log('identical entity')
		// }
	}
	catch(e)
	{
		console.log('malformed request', body);
	}

})
}, 30000)
}

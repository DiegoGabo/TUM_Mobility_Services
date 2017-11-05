//Express will be used for routing
var express = require('express'),
	app = express()
const request = require("request")


//Learn what this is for
const bodyParser = require('body-parser');


app.use(bodyParser.json())

//Database mongodb connection
var mongoose = require('mongoose')

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bmw3data')
var db = mongoose.connection

//model import
var Bmwdata = require('./models/bmwdata')

//var html = require('./HTML/main.html')

//Access the BMW telematics data
var json, gpsLat, gpsLng, data
var postConfig = {}
var postSuccessHandler = function(err, httpResponse, body){
	console.log('JSON response from the server: ' + body)
}

//For json post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const options1 = {
	vin: 'WBA1S510805J88762',
	url: 'https://api.bmwgroup.com/otpdatadelivery/api/thirdparty/v1/clearances/08ff2224-8afc-41bb-b33e-0ca3b2207102/telematicdata',
	method: 'GET',
	headers: {
	KeyId: 'c4157993-3fd8-4cbe-95bf-643a73fcb788'
}}
const options2 = {
	vin: 'WBY1Z21000V308999',
	url: "https://api.bmwgroup.com/otpdatadelivery/api/thirdparty/v1/clearances/6e396d66-71de-4a53-9a08-2f577e7f2a6b/telematicdata",
	method: 'GET',
	headers: {
	KeyId: 'c4157993-3fd8-4cbe-95bf-643a73fcb788'
}}

fetchBMWdata(options1)
fetchBMWdata(options2)



//Request the data from bmw server and console log it
//setInterval to fetch the data every 10min = 60000ms 1s = 1000ms 1min = 60000 10min = 600000ms
function fetchBMWdata(options){

setInterval(function(){request.get(options, (error, response, body) => {
	json = JSON.parse(body)
	vinOld = options.vin
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

	}

	data = {
		'vinBmw': vinOld,
		'gpsLat': gpsLat,
		'gpsLng': gpsLng,
		'remainingFuel': remainingFuel,
		'airTemperature': airTemperature,
		'remainingRange': remainingRange,
		'mileage': mileage
	}

	console.log(gpsLat, gpsLng)
	postConfig = {
		url: 'http://localhost:3000/api/bmwdata',
		form: data 
	}
	console.log(postConfig)
	request.post(postConfig, postSuccessHandler);

})}, 5000)
}

//Lets visualize the data
app.get('/', (req, res) => {
	res.send(json)

})

//get bmwData from database
app.get('/api/bmwdata', (req, res) => {
	Bmwdata.getbmwData((err, bmwData) => {
		if(err){
			throw err;
		}
		res.json(bmwData);
	});
});


//post request to add the data to database
app.post('/api/bmwdata', (req, res) => {
	console.log('Post method!!!!')
	var bmwdata = req.body;
	Bmwdata.addbmwData(bmwdata, (err, bmwdata) => {
		if(err){
			throw err;
		}
		res.json(bmwdata);
	})
})


var server = app.listen(3000, function(){
	var port = server.address().port
	console.log('Express server listening on port %s', port)
})

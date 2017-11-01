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
mongoose.connect('mongodb://localhost/bmwcardata')
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

const options = {
	url: 'https://api.bmwgroup.com/otpdatadelivery/api/thirdparty/v1/clearances/08ff2224-8afc-41bb-b33e-0ca3b2207102/telematicdata',
	method: 'GET',
	headers: {
	KeyId: 'c4157993-3fd8-4cbe-95bf-643a73fcb788'
}}



//Request the data from bmw server and console log it
//setInterval to fetch the data every 10min = 600000ms
setInterval(function(){
request.get(options, (error, response, body) => {
	json = JSON.parse(body)
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
		'gpsLat': gpsLat,
		'gpsLng': gpsLng,
		'remainingFuel': remainingFuel,
		'airTemperature': airTemperature,
		'remainingRange': remainingRange,
		'mileage': mileage
	}

	console.log(gpsLat, gpsLng)
	postConfig = {
		url: 'localhost:3000/api/bmwdata',
		form: data 
	}
	console.log(postConfig)
	request.post(postConfig, postSuccessHandler);

})}, 600000)


//Lets visualize the data
app.get('/', (req, res) => {
	//res.send("fetching data from bmw server every 10minutes. Check the database from  /api/bmwdata \n\n")
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


postConfig = {
	url: 'http://localhost:3000/api/bmwdata',
	form: data 
}




var server = app.listen(process.env.PORT || 3000, function(){
	var port = server.address().port
	console.log('Express server listening on port %s', port)
})
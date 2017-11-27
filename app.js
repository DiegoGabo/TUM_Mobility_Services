const express = require('express'),  //Express will be used for routing
	app = express()
const mongoose = require('mongoose') //Database mongodb connection
const request = require("request")
const config = require('./config/database')
const session = require('express-session')
const bodyParser = require('body-parser')  //Learn what this is for
const passport = require('passport')
const flash = require('connect-flash')

app.use(bodyParser.json())

//Local Server for database Connect to Mongoose
mongoose.connect(config.database)
//production database server
//mongoose.connect('mongodb://heroku_w5z3d9qq:977j9v5ee163bc59p3l1l96a3f@ds243335.mlab.com:43335/heroku_w5z3d9qq')
var db = mongoose.connection

//model import
var Bmwdata = require('./models/bmwdata')

// Passport Config
require('./config/passport')(passport)

// Express Session Middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//Access the BMW telematics data
var json, gpsLat, gpsLng, data
var postConfig = {}
var postSuccessHandler = function(err, httpResponse, body){
	console.log(err)
	//console.log('JSON response from the server: ' + body)
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
const options3 = {
	vin: 'WBAUD91090P381103',
	url: "https://api.bmwgroup.com/otpdatadelivery/api/thirdparty/v1/clearances/7780b0d6-18a7-4910-b5c7-6fc6f829502c/telematicdata",
	method: 'GET',
	headers: {
	KeyId: 'c4157993-3fd8-4cbe-95bf-643a73fcb788'
}}
fetchBMWdata(options1)
fetchBMWdata(options2)
fetchBMWdata(options3)


//Request the data from bmw server and console log it
//setInterval to fetch the data every 10min = 60000ms 1s = 1000ms 1min = 60000 10min = 600000ms
function fetchBMWdata(options){

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

	}

	data = {
		'vinBmw': vin,
		'gpsLat': gpsLat,
		'gpsLng': gpsLng,
		'remainingFuel': remainingFuel,
		'airTemperature': airTemperature,
		'remainingRange': remainingRange,
		'mileage': mileage,
		"segmentLastTripAccelerationStars": SegmentLastTripAccelerationStars
	}

	//console.log(gpsLat, gpsLng)
	postConfig = {
		//production settings
		//url: 'https://bemostwanted.herokuapp.com/api/bmwdata',
		//development setting
		url: 'http://localhost:3000/api/bmwdata',
		form: data 
	}
	//console.log(postConfig)
	request.post(postConfig, postSuccessHandler);

})
//}, 5000)
}

//Lets visualize the data
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/main.html')

})

//Route File for api
let api = require('./routes/api') 
app.use('/api',api)



// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//Route File for users
let users = require('./routes/users') 
app.use('/users',users)

//session thing work on that later
app.get('*', (req,res,next)=>{
	res.locals.user = req.user || null
	next()
})

//data4react example usage
var react = require("./data4react.js")
react.data4react("WBY1Z21000V308999", function(react){
	//console.log(react)
})



var server = app.listen(process.env.PORT || 3000, function(){
	var port = server.address().port
	console.log('Express server listening on port %s', port)
})


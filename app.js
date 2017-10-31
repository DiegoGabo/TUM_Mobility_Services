//Express will be used for routing
var express = require('express'),
	app = express()
const request = require("request")

//better than request maybe try
const rp = require("request-promise")
//Learn what this is for
const bodyParser = require('body-parser');

app.use(bodyParser.json())

//Database mongodb connection
var mongoose = require('mongoose')

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bmwdata')
var db = mongoose.connection

//model import
var Bmwdata = require('./models/bmwdata')

//Access the BMW telematics data
var json, gpsLat, gpsLng, req


const options = {
	url: 'https://api.bmwgroup.com/otpdatadelivery/api/thirdparty/v1/clearances/08ff2224-8afc-41bb-b33e-0ca3b2207102/telematicdata',
	method: 'GET',
	headers: {
	KeyId: 'c4157993-3fd8-4cbe-95bf-643a73fcb788'
}}



//Request the data from bmw server and console log it
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
	}
	req = {
		'gpsLat': gpsLat,
		'gpsLng': gpsLng
	}
	console.log(req)
	console.log(gpsLat, gpsLng)

})

request.post({url:"localhost:3000"}, (error, res, body)=> {

})




//post request to add the data to database
app.post('/api/bmwdata', (req, res) => {
	var bmwdata = req.body;
	Bmwdata.addBmwdata(bmwdata, (err, bmwdata) => {
		if(err){
			throw err;
		}
		res.json(bmwdata);
	});
});

app.get('/api/bmwdata', (req, res) => {
	Genre.getBmwdata((err, genres) => {
		if(err){
			throw err;
		}
		res.json(genres);
	});
});


//Lets visualize the data
app.get('/', (req, res) => {
	res.send(json)

})


var server = app.listen(3000, function(){
	var port = server.address().port
	console.log('Express server listening on port %s', port)
})
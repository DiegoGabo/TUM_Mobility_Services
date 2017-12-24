const mongoose = require('mongoose') //Database mongodb connection
const config = require('./config/database')


//database connect
mongoose.connect(config.database)
var db = mongoose.connection
var dev_url = config.dev_url
var prod_url = config.prod_url

const User = require('./models/user')
// db.once('open', function(){
// 	db.collection('users').find().remove()
// })
const Bmw = require('./models/bmwdata')
const Car = require('./models/car')

//Seed users ------------------------------------
exports.seedUsers = function(){
	const users = [
	{id:'1',name: 'Marcus Aurelius', position: "HR Specialist"},
	{id:'2',name: 'Max Mustermann', position: "Software Engineer"},
	{id:'3',name: 'Christoph NG', position: "Customer Solutions Manager"}
	]
	for(user of users){
		var newUser = new User(user)
		newUser.save()
	}
}
// Seed Cars -------------------------------------
exports.seedCars = function(){
     const cars = [
     {vin:'WBA1J71080V593471',model: 'M235i'},
     {vin:'WBA1S51010V834224',model: '120'},
     {vin:'WBY1Z21000V308999',model: 'i3'},
     {vin:'WBA1S510805J88762',model: 'unknown'},
     {vin:'WBAUD91090P381103',model: '120d'}
     ]
     for(car of cars){
          var newCar= new Car(car)
          newCar.save()
     }
}


//Seed BMW _----------------------
const request = require("request")

var postConfig = {}
var postSuccessHandler = function(err, httpResponse, body){
	// console.log(err)
	console.log('JSON response from the server: ' + body)
}


exports.seedBmw = function(){
	const bmwdatas = [
	{vinBmw: 'WBAUD91090P381103',
     gpsLat: '41.193607',
     gpsLng: '10.568653',
     remainingFuel: '20',
     airTemperature: '7.5',
     remainingRange: '20',
     mileage: '350000',
     segmentLastTripAccelerationStars: '2',
     lastTripBrakingStars: '3',
     lastTripElectricEnergyConsumptionOverall: '4',
     lastTripRecuperationOverall: '4'},
    {vinBmw: 'WBA1S51010V834224',
     gpsLat: '50.193607',
     gpsLng: '20.568653',
     remainingFuel: '80',
     airTemperature: '2.5',
     remainingRange: '40',
     mileage: '350000',
     segmentLastTripAccelerationStars: '4',
     lastTripBrakingStars: '3',
     lastTripElectricEnergyConsumptionOverall: '5',
     lastTripRecuperationOverall: '1'},
    {vinBmw: 'WBA1S510805J88762',
     gpsLat: '55.193607',
     gpsLng: '13.568653',
     remainingFuel: '50',
     airTemperature: '1',
     remainingRange: '100',
     mileage: '150000',
     segmentLastTripAccelerationStars: '2',
     lastTripBrakingStars: '4',
     lastTripElectricEnergyConsumptionOverall: '1',
     lastTripRecuperationOverall: '1'},
     {vinBmw: 'WBA1S51010V834224',
     gpsLat: '37.193607',
     gpsLng: '18.568653',
     remainingFuel: '28',
     airTemperature: '18',
     remainingRange: '70',
     mileage: '14000',
     segmentLastTripAccelerationStars: '4',
     lastTripBrakingStars: '1',
     lastTripElectricEnergyConsumptionOverall: '5',
     lastTripRecuperationOverall: '5'},
     {vinBmw: 'WBY1Z21000V308999',
     gpsLat: '25.193607',
     gpsLng: '19.568653',
     remainingFuel: '40',
     airTemperature: '20',
     remainingRange: '40',
     mileage: '70000',
     segmentLastTripAccelerationStars: '3',
     lastTripBrakingStars: '5',
     lastTripElectricEnergyConsumptionOverall: '3',
     lastTripRecuperationOverall: '4'}
	]
	for(bmwdata of bmwdatas){
          // another approach, in this approach user is not updated. Should do user match to trip in model of bmwdata.
		// var newBmwdata = new Bmw(bmwdata)
		// newBmwdata.save()
		postConfig = {
			//production settings
			url: prod_url + 'api/bmwdata',
			//development setting
			//url: dev_url +'api/bmwdata',
			form: bmwdata 
		}
		//console.log("PostConfig",postConfig)
		request.post(postConfig, postSuccessHandler);
	}
}


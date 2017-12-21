const express = require('express')
const router = express.Router() //Kind of the same this as app = express() in app.js file. But this is like a specialized only users.
const bodyParser = require('body-parser')  //Learn what this is for
const mongoose = require('mongoose') //Database mongodb connection
const config = require('../config/database')

//database connect
mongoose.connect(config.database)
var db = mongoose.connection
//For json post requests to parse the body
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

//model import
const Bmwdata = require('../models/bmwdata')
const User = require('../models/user')
const Car = require('../models/car')

//get bmwData from database
router.get('/bmwdata', (req, res) => {
	Bmwdata.getbmwData((err, bmwData) => {
		if(err){
			throw err
		}
		res.json(bmwData)
	});
});

router.get('/cars', (req,res)=> {
	Car.getCarsData((err, carData) => {
		if(err){
			throw err
		}
		res.json(carData)
	});
})

//trip id gives trip
router.get('/:_id', (req,res)=>{
	Bmwdata.findOne(req.params).exec((err,result)=>{
			if(err) return console.log(err)
			var trip = []
			trip.push(result)
			res.send(trip)
	})
})


//user of a trip
router.get('/:_id/user', (req,res)=>{
	Bmwdata.findOne(req.params).populate('user').exec((err,result)=>{
			if(err) return console.log(err)
			res.send(result.user)
	})
})


//post request to add the data to database
router.post('/bmwdata', async (req, res) => {
	var bmwdata = req.body
	//console.log(bmwdata)
	//1 and 3 are user id numbers. starts from 1 to 3
  	var i= Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1)) + Math.ceil(1); 
	const user = await User.findOne({id: i})
	//Add trip to the car. From the vinBmw key of the json req
	const car = await Car.findOne({vin:bmwdata.vinBmw})
	//console.log(car);
	bmwdata.user = await user._id
	//console.log(bmwdata)
	Bmwdata.addbmwData(bmwdata, (err, bmwdata) => {
		if(err){
			if (err.name === 'MongoError' && err.code === 11000) {
	        	// Duplicate username
	        	console.log('BMWdata already exist')
	        	return res.status(500).send({ succes: false, message: 'Bmwdata already exist' });
        	}
      	}
      	user.trips.push(bmwdata._id)
      	user.save((err)=>{
      		if(err) throw err
      		console.log("user updated")	
      	})
      	car.trips.push(bmwdata._id)
      	car.save((err)=>{
      		if(err) throw err
      		console.log("car updated")	
      	})
		res.status(201).json(bmwdata)
	})
})

router.post('/car', (req,res)=> {
	var car_data = req.body
	console.log(car_data)

	Car.addCar(car_data,(err, cardata)=>{
		if(err) console.log(err);
		res.status(201).json(cardata);
	})

})

router.get('/cars', (req,res)=> {
	Car.getCarsData((err, carData) => {
		if(err){
			throw err
		}
		res.json(carData)
	});
})


//Getting the data from the form in main.html
//reach the query of the form by req.query function
//fetching the results from db
//Turning the results in to an array
//result data is rendered as query variable in main.ejs.
//Access the last latitude data of the car in main.ejs by <%= query[query.length-1].gpsLat %>
//You can access every data by using the same notation
router.get('/', (req,res)=>{
	// console.log(req.query)
	db.collection('bmwdatas').find(req.query).sort({"create_date": -1}).toArray((err,result) =>{
		if(err) return console.log(err)
		//res.render('main.ejs', { query : result })
		res.send(result)
	})
})


module.exports = router;

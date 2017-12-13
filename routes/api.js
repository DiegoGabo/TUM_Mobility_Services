const express = require('express')
const router = express.Router() //Kind of the same this as app = express() in app.js file. But this is like a specialized only users.
const bodyParser = require('body-parser')  //Learn what this is for
const mongoose = require('mongoose') //Database mongodb connection
const config = require('../config/database')
const User = require('../models/user')
//database connect
mongoose.connect(config.database)
var db = mongoose.connection
//For json post requests to parse the body
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

//model import
const Bmwdata = require('../models/bmwdata')

//get bmwData from database
router.get('/bmwdata', (req, res) => {
	Bmwdata.getbmwData((err, bmwData) => {
		if(err){
			throw err
		}
		res.json(bmwData)
	});
});

//post request to add the data to database
router.post('/bmwdata', async (req, res) => {
	var bmwdata = req.body
	//console.log(bmwdata)
	const user = await User.findOne({id: '1'})
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
      	console.log(bmwdata)
      	user.trips.push(bmwdata._id)
      	user.save((err)=>{
      		if(err) throw err
      		console.log("user updated")	
      	})
		res.status(201).json(bmwdata)
	})
})

//Getting the data from the form in main.html
//reach the query of the form by req.query function
//fetching the results from db
//Turning the results in to an array
//result data is rendered as query variable in main.ejs.
//Access the last latitude data of the car in main.ejs by <%= query[query.length-1].gpsLat %>
//You can access every data by using the same notation
router.get('/', (req,res)=>{
	console.log(req.query)
	db.collection('bmwdatas').find(req.query).sort({"create_date": -1}).toArray((err,result) =>{
		if(err) return console.log(err)
		//res.render('main.ejs', { query : result })
		res.send(result)
	})
})


module.exports = router;

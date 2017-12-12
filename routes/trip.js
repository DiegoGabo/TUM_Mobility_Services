const trip = require('../models/trip')
const express = require('express')
const router = express.Router() //Kind of the same this as app = express() in app.js file. But this is like a specialized only users.

//to get all the trips
router.get(',',(err, res)=>{
	trip.getTrips((err,trips) => {
		if(err){
			throw err
		}
		res.json(trips)
	})
})


module.exports=router
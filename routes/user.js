const express = require('express')
const router = express.Router() //Kind of the same this as app = express() in app.js file. But this is like a specialized only users.
const expressValidator = require('express-validator')
const mongoose = require('mongoose') //Database mongodb connection
const path = require('path')
const bcrypt = require('bcryptjs')
const passport = require('passport')
//Bmwdata model
const bmwdata = require('../models/bmwdata')

//User model
const User = require('../models/user')
const config = require('../config/database')


//get one user by id
router.get('/:id', (req,res)=>{
	console.log(req.params.id)
	if(req.params.id != 0)
	{	
		User.findOne((req.params),(err,result) =>{
			if(err) return console.log(err)
			res.send(result)
		})
	}
	else console.log("no user with 0 id")
})
//get trips of a user by id
router.get('/:id/trips', (req,res)=>{
	// console.log(req.params)
	User.findOne(req.params).populate('trips').exec((err,result)=>{
			if(err) return console.log(err)
			res.send(result.trips)
	})
})



module.exports = router
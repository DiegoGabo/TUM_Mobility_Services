const express = require('express')
const router = express.Router() //Kind of the same this as app = express() in app.js file. But this is like a specialized only users.
const expressValidator = require('express-validator')
const path = require('path')
const bcrypt = require('bcryptjs')
const passport = require('passport')
//Trip model
const trip = require('../models/trip')

//User model
const User = require('../models/user')

router.use(expressValidator())

//List of all users
router.get('/',(req,res) =>{
	User.getUsers((err, users) => {
		if(err){
			throw err
		}
		res.json(users)
	})
})


//register from
router.get('/register', (req, res) =>{
  //res.sendFile(path.join(__dirname , '../views/register.html'))
  res.render('register.ejs', {errors: false})
})

//register process
router.post('/register', (req,res)=>{ //using this cool arrow function comes new with the es6. Just a cool and short way of writing function(req,res){}
	const name = req.body.name
	const email = req.body.email
	//const username = req.body.username
	const password = req.body.password
	const password2 = req.body.password2

	req.checkBody('email', 'Email is required').notEmpty()
	req.checkBody('email', 'Email is not valid').isEmail()
	req.checkBody('name', 'Name is required').notEmpty()
	//req.checkBody('username', 'Username is required').notEmpty()
	req.checkBody('password', 'Password is required').notEmpty()
	req.checkBody('password2', 'Passwords do not match').equals(password)

	let errors = req.validationErrors();
	if(errors){
	    res.render('register.ejs', { errors:errors })
	} else {
		let newUser = new User({
			name: name,
			email: email,
			password: password
		})

		bcrypt.genSalt(10, (err,salt)=>{
			bcrypt.hash(newUser.password, salt, (err, hash)=>{
				if(err){
					console.log(err)
				}
				newUser.password = hash
				newUser.save((err)=>{
					if(err){
						console.log(err)
						return
					} else {
						req.flash('success', 'you are now registered and can log in')
						res.redirect('/users/login')
					}
				})
			})
		})
	}
})

//login form
router.get('/login', (req,res)=>{
	res.render('login.ejs') 
})

// Login Process
router.post('/login', function(req, res, next){
  passport.authenticate('local', {
    successRedirect:'/users/login',
    failureRedirect:'/users/login',
    failureFlash: true,
    successFlash: 'Welcome!'
  })(req, res, next);
});




module.exports = router
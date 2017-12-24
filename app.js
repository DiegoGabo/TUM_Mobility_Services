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
const options4 = {
	vin: 'WBA1S51010V834224',
	url: "https://api.bmwgroup.com/otpdatadelivery/api/thirdparty/v1/clearances/608e7c32-d6ba-4758-9509-e25c7ee62f39/telematicdata",
	method: 'GET',
	headers: {
	KeyId: 'c4157993-3fd8-4cbe-95bf-643a73fcb788'
}}
const options5 = {
	vin: 'WBA1J71080V593471',
	url: "https://api.bmwgroup.com/otpdatadelivery/api/thirdparty/v1/clearances/9d1d4711-1b71-4bda-9696-d0726d57db6c/telematicdata",
	method: 'GET',
	headers: {
	KeyId: 'c4157993-3fd8-4cbe-95bf-643a73fcb788'
}}
fetch = require("./fetchdata")
fetch.fetchBMWdata(options1)
fetch.fetchBMWdata(options2)
//fetch.fetchBMWdata(options3)
fetch.fetchBMWdata(options4)
fetch.fetchBMWdata(options5)

//Lets visualize the data
// app.get('/', (req, res) => {
// 	res.sendFile(__dirname + '/views/main.html')

// })


//Route File for api
let api = require('./routes/api') 
app.use('/api',api)


// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next()
})

//Route File for users
let users = require('./routes/users') 
app.use('/users',users)

//Route File for users
let user = require('./routes/user') 
app.use('/user',user)

//session thing work on that later
// app.get('*', (req,res,next)=>{
// 	res.locals.user = req.user || null
// 	next()
// })

seed = require("./seed")
//seedCars is problematic sometimes gives error related to null trips
seed.seedCars()
seed.seedUsers()
setTimeout(function () {
	seed.seedBmw()
}, 100)


// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./build'));
}


var server = app.listen(process.env.PORT || 3000, function(){
	var port = server.address().port
	console.log('Express server listening on port %s', port)
})


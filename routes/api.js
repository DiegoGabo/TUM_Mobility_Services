const express = require('express')
const router = express.Router() //Kind of the same this as app = express() in app.js file. But this is like a specialized only users.
const bodyParser = require('body-parser')  //Learn what this is for


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
router.post('/bmwdata', (req, res) => {
	var bmwdata = req.body
	//console.log(bmwdata)
	Bmwdata.addbmwData(bmwdata, (err, bmwdata) => {
		if(err){
			throw err
		}
		res.json(bmwdata)
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
	db.collection('bmwdatas').find(req.query).sort({"create_date": -1}).toArray((err,result) =>{
		console.log(req.query)
		if(err) return console.log(err)
		//res.render('main.ejs', { query : result })
		res.send(result)
	})
})


module.exports = router;

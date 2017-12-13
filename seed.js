const mongoose = require('mongoose') //Database mongodb connection
const config = require('./config/database')


//database connect
mongoose.connect(config.database)
var db = mongoose.connection

const User = require('./models/user')
// db.once('open', function(){
// 	db.collection('users').find().remove()
// })


exports.seedUsers = function(){
	const users = [
	{id:'1',name: 'Marcus Aurelius'},
	{id:'2',name: 'Max'},
	{id:'3',name: 'Christoph'}
	]
	for(user of users){
		var newUser = new User(user)
		newUser.save()
	}
}


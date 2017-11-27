const request = require("request")
const bodyParser = require('body-parser')  //Learn what this is for



//doing a 
exports.data4react = function(query,callback){
	rawurl = 'http://localhost:3000/api/?vinBmw='
	key = query
	toturl = rawurl + key
	console.log(toturl)
	console.log(query)
	const options = {
		url: toturl,
	 	method: 'GET'
	}
	request.get(options, (error,response,body)=>{
		if(error) return console.log(error)
		json = JSON.parse(body)
		callback(json)
	})

}

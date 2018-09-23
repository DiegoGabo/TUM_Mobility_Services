if (process.env.NODE_ENV === 'production') {
	module.exports={
		//database: 'mongodb://localhost/bmw7data',
		database:'mongodb://heroku_w5z3d9qq:977j9v5ee163bc59p3l1l96a3f@ds243335.mlab.com:43335/heroku_w5z3d9qq',
		url: 'https://bemostwanted.herokuapp.com/',
	}
}
else{
	module.exports={
		//database: 'mongodb://localhost/bmw7data',
		database:'mongodb://heroku_w5z3d9qq:977j9v5ee163bc59p3l1l96a3f@ds243335.mlab.com:43335/heroku_w5z3d9qq',
		url: 'http://localhost:3000/'
	}

}
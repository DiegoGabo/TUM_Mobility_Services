const express = require('express')
const router = express.Router()
const path = require('path')


//User model
let User = require('../models/user')


//register from
router.get('/register', function(req, res){
  res.sendFile(path.join(__dirname , '../views/register.html'));
})


module.exports = router;
const express = require('express')
const postdata = require('./controll')

const router = express.Router()

router.post('/postdata', postdata)

module.exports = router;
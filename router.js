const express = require('express')
const pathdata = require('./controll')

const router = express.Router()

router.post('/postdata', postdata)

module.exports = router;
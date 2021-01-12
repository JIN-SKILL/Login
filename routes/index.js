const express = require('express')
const router = express.Router()

const login = require('./modules/login')
const welcome = require('./modules/welcome')

router.use('/', login)
router.use('/login', welcome)

module.exports = router

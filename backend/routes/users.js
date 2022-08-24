const express = require('express')
const router = express.Router()
const {getUser,addUser,signIn} = require('../controllers/users')

router.get('/', getUser)

router.post('/register', addUser)

router.post('/signIn', signIn)

module.exports = router
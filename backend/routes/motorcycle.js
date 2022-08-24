const express = require('express')
const router = express.Router()
const {getMotorcycles,getOneMotorcycle} = require('../controllers/motorcycles')

router.get('/', getMotorcycles)
router.get('/:id',getOneMotorcycle)

module.exports = router
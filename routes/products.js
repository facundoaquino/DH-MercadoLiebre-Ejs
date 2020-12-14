const express = require('express')
const productsController = require('../controllers/productsController')

const router = express.Router()

router.get('/detail/:id/:category', productsController.pageProduct)

module.exports = router

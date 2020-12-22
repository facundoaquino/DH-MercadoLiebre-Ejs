// ************ Require's ************
const express = require('express')
const router = express.Router()

// ************ Controller Require ************
const productsController = require('../controllers/productsController')

/*---------------------- multer/path ---------------------*/
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/images/products')
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
	},
})

const upload = multer({ storage: storage })

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index)

// /*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.create)
router.post('/create', upload.any(), productsController.store)

// /*** GET ONE PRODUCT ***/
router.get('/detail/:id', productsController.detail)

// /*** EDIT ONE PRODUCT ***/
router.get('/edit/:id', productsController.edit)
router.put('/:id', upload.any(), productsController.update)

// /*** DELETE ONE PRODUCT***/
router.delete('/delete/:id', productsController.destroy)

module.exports = router

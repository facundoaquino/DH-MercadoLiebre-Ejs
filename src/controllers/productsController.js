const fs = require('fs')
const path = require('path')
const { disconnect } = require('process')
const setID = require('../helpers/setID')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

products.forEach((product) => (product.price = toThousand(product.price)))

/*---------------------- multer ---------------------*/

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', { products })
	},

	// Detail - Detail from one product
	detail: (req, res, next) => {
		const product = products.find((pro) => pro.id == req.params.id)

		if (product.discount) {
			let price = Number(product.price.replace('.', ''))
			product.priceDiscount = price - (price * product.discount) / 100
		}

		res.render('detail', { product, title: product.name })
	},

	// Create - Form to create
	create: (req, res, next) => {
		res.render('product-create-form')
	},

	// Create -  Method to store
	store: (req, res, next) => {
		const ids = products.map((product) => product.id)
		const idGenerate = setID(ids)
		const product = {
			...req.body,
			id: idGenerate,
			image: req.files[0].filename,
		}
		product.discount = Number(product.discount)
		products.push(product)
		const productJson = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, productJson)

		res.redirect('/')
	},

	// Update - Form to edit

	edit: (req, res, next) => {
		const product = products.find((product) => product.id == req.params.id)
		res.render('product-edit-form', { product, title: product.name })
	},
	// Update - Method to update
	update: (req, res, next) => {
		const keys = Object.keys(req.body)
		const product = products.find((product) => product.id == req.params.id)
		keys.forEach((key) => (product[key] = req.body[key]))
		product.image = req.files[0].filename

		// const { name, price, discount, description, category } = req.body
		// products.forEach((product) => {
		// 	if (product.id == req.params.id) {
		// 		// product = {  ...req.body, image: req.files[0].filename }
		// 		product.name = name
		// 		product.price = price
		// 		product.discount = Number(discount)
		// 		product.image = req.files[0].filename
		// 		product.category = category
		// 		product.description = description
		// 	}
		// })

		const productJson = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, productJson)

		res.redirect('/')
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		const productsNotDeleted = products.filter((product) => product.id != req.params.id)

		const productJson = JSON.stringify(productsNotDeleted)
		fs.writeFileSync(productsFilePath, productJson)

		res.redirect('/')
	},
}

module.exports = controller

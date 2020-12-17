const fs = require('fs')
const path = require('path')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

products.forEach((product) => (product.price = toThousand(product.price)))
const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', { products })
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const product = products.find((pro) => pro.id == req.params.id)

		if (product.discount) {
			let price = Number(product.price.replace('.', ''))
			product.priceDiscount = price - (price * product.discount) / 100
		}

		res.render('detail', { product, title: product.name })
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},

	// Create -  Method to store
	store: (req, res) => {
		res.send(req.body)
	},

	// Update - Form to edit

	edit: (req, res) => {
		const product = products.find((product) => product.id == req.params.id)
		res.render('product-edit-form', { product, title: product.name })
	},
	// Update - Method to update
	update: (req, res) => {
		res.send({ id: req.params.id, ...req.body })
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		const product = products.find((product) => product.id == req.params.id)
		res.send({ deleted: true, ...product })
	},
}

module.exports = controller

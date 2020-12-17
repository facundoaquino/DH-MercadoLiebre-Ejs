const fs = require('fs')
const path = require('path')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))

const productsVisitedInSale = { visited: [], insale: [] }

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
products.forEach((product) => {
	product.price = toThousand(product.price)
	product.category == 'visited'
		? productsVisitedInSale.visited.push(product)
		: productsVisitedInSale.insale.push(product)
})

const controller = {
	index: (req, res) => {
		res.render('index', productsVisitedInSale)
	},
	search: (req, res) => {
		// Do the magic
	},
}

module.exports = controller

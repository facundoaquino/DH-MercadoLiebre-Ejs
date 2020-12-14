const { productsSale, productsVisited, totalPriceProducts } = require('../helpers/dataProducts')
const toThousand = require('../helpers/toThousand')

const productsController = {
	pageProduct: (req, res) => {
		const id = req.params.id
		const product = totalPriceProducts.find((product) => product.id == id)
		let priceDiscount = 0

		if (product.discount) {
			priceDiscount = product.price - (product.price * product.discount) / 100
			priceDiscount = toThousand(priceDiscount)
		} else {
			priceDiscount = toThousand(product.price)
		}
		res.render('productPage', { product, title: `Product ${id}`, priceDiscount })
	},
}

module.exports = productsController

const { productsVisited, productsSale } = require('../helpers/dataProducts')

const mainController = {
	home: (req, res) => {
		res.render('index', { title: 'Home', productsVisited, productsSale })
	},
}

module.exports = mainController

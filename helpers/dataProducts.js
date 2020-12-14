const fs = require('fs')
const toThousand = require('./toThousand')

const jsonProducts = fs.readFileSync('./productsDataBase.json', 'utf-8')

const products = JSON.parse(jsonProducts)

const totalPriceProducts = JSON.parse(jsonProducts)

products.forEach((product) => (product.price = toThousand(product.price)))

const productsVisited = products.filter((product) => product.category == 'visited')

const productsSale = products.filter((product) => product.category == 'in-sale')

// .map((product) => (product.price = toThousand(product.price)))

module.exports = { productsVisited, productsSale, products, totalPriceProducts }

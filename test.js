const fs = require('fs')
const toThousand = require('./helpers/toThousand')

const jsonProducts = fs.readFileSync('productsDataBase.json', 'utf-8')

const products = JSON.parse(jsonProducts)

const productsSale = products.filter((product) => product.category == 'in-sale')

productsSale.forEach((product) => (product.price = toThousand(product.price)))

console.log(productsSale)

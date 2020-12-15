/*---------------------- MAIN MODULES ---------------------*/

const express = require('express')
const app = express()
const path = require('path')

/*---------------------- REQUIRED ROUTES ---------------------*/
const routerMain = require('./routes/main')

const routerLogin = require('./routes/login')

const routerRegister = require('./routes/register')
const routerProducts = require('./routes/products')

/*---------------------- SET PORT DEFAULT BY SERVER OR SET 3000 LIKE LOCAL ---------------------*/

const port = process.env.PORT || 3030

/*---------------------- SET A VIEW ENGINE EJS ---------------------*/

app.set('view engine', 'ejs')

/*---------------------- SET PUBLIC FILES ---------------------*/

app.use(express.static(path.join(__dirname, '/public')))

/*---------------------- ROUTES ---------------------*/

app.use('/', routerMain)

app.use('/login', routerLogin)

app.use('/register', routerRegister)

app.use('/product', routerProducts)

app.listen(port, () => {
	console.log('Servidor MercadoLiebre en puerto ' + port)
})

const loginController = {
	login: (req, res) => {
		res.render('login', { title: 'Login' })
	},
}

module.exports = loginController

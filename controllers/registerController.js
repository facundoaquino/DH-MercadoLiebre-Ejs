const registerController = {
	register: (req, res) => {
		res.render('register', { title: 'Rigister' })
	},
}

module.exports = registerController

const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;
const Movies = db.movies;

module.exports = {
	index: (req, res, ) => {
		Movies
			.findAll()
			.then(movies => {
				return res.render('movies/index', { movies });
			})
			.catch(error => res.send(error));
	},

	show: (req, res) => {
		Movies
			.findByPk(req.params.id)
			.then(movie => res.render('movies/show', { movie }))
				.catch(error => res.send(error));
	},

	destroy: (req, res) => {
		Movies
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(() => res.redirect('/movies'))
			.catch(error => res.send(error));
	},

	create: (req, res) => {
		sequelize
			.query('SELECT * from genres')
			.then(genres => res.render('movies/create', { genres: genres[0] }))
			.catch(error => res.send(error));
	},
	
	store: (req, res) => {
		Movies
			.create(req.body)
			.then(() => res.redirect('/movies'))
			.catch(error => res.send(error));
	},

	search: (req, res) => {
		Movies.findAll({
			where: {
				title: {[Op.like]: `%${req.query.search}%`}
			}
		})
		.then(results => {
			res.locals.results = results;
			return res.render('movies/search');
		})
	},
}
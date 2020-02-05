const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;
const Movies = db.movies;
const Actors = db.actors;

module.exports = {
	index: (req, res, ) => {
		Movies
			.findAll({
				include: ['genre', 'actors'],
				order: [
					['title', 'ASC'],
				]
			})
			.then(movies => {
				// return res.send(movies);
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

	edit: (req, res) => {
		sequelize
			.query('SELECT * from genres')
			.then(genres => {
				Movies
					.findByPk(req.params.id)
					.then(movie => {
						return res.render('movies/edit', { genres: genres[0], movie });
					})
					.catch(error => res.send(error));
			})
			.catch(error => res.send(error));
	},

	update: (req, res) => {
		Movies
			.update(req.body, {
				where: {
					id: req.params.id
				}
			})
			.then(() => res.redirect('/movies'))
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
			.then(genres => {
				Actors
					.findAll()
					.then(actors => {
						return res.render('movies/create', { genres: genres[0], actors });
					})
		})
			.catch(error => res.send(error));
	},
	
	store: (req, res) => {
		Movies
			.create(req.body)
			.then(movieSaved => {
				movieSaved.addActors(req.body.actors);
				res.redirect('/movies')
			})
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
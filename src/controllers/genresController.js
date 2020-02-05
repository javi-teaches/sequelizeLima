const db = require('../database/models');

const Genres = db.genres;

module.exports = {
	index: (req, res) => {
		Genres
			.findAll({
				include: ['movies']
			})
			.then(genres => {
				return res.send(genres)
			})
			.catch(error => res.send(error));
	}
}
module.exports = (sequelize, DataTypes) => {
	const movie = sequelize.define('movies', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: DataTypes.STRING,
		rating: DataTypes.INTEGER,
		awards: DataTypes.STRING,
		release_date: DataTypes.DATE,
		length: DataTypes.INTEGER,
		genre_id: DataTypes.INTEGER,
	}, {
		// tableName: 'peliculas',
		// timestamps: false
	});

	movie.prototype.getTitleAndRating  = function () {
		return this.title + ' - ' + this.rating;
	}

	movie.associate = (models) => {
		movie.belongsTo(models.genres, {
			as: 'genre',
			foreignKey: 'genre_id'
		});

		movie.belongsToMany(models.actors, {
			as: 'actors',
			through: 'actor_movie',
			foreignKey: 'movie_id',
			otherKey: 'actor_id',
			timestamps: false
		});
	}

	return movie;
}
module.exports = (sequelize, DataTypes) => {
	const actor = sequelize.define('actors', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		first_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		rating: DataTypes.INTEGER,
		favorite_movie_id: DataTypes.INTEGER
	}, {
		timestamps: false
	});

	actor.prototype.getFullName = function () {
		return this.first_name + ' ' + this.last_name;
	}

	actor.associate = (models) => {
		actor.belongsToMany(models.movies, {
			as: 'movies',
			through: 'actor_movie',
			foreignKey: 'actor_id',
			otherKey: 'movie_id',
			timestamps: false
		});
	}

	return actor;
}
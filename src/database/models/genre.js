module.exports = (sequelize, DataTypes) => {
	const genre = sequelize.define('genres', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: DataTypes.STRING,
		ranking: DataTypes.INTEGER,
		active: DataTypes.INTEGER
	}, {
		timestamps: false
	});

	genre.associate = (models) => {
		genre.hasMany(models.movies, {
			as: 'movies',
			foreignKey: 'genre_id'
		})
	}

	return genre;
}
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

	return movie;
}
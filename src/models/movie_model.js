
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate({Rating}) {

      // ratings 
      Movie.hasMany(Rating, {
        foreignKey: "rating_id",
        as: "ratings"
      })
    }
  }
  Movie.init({
    movie_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STING
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies'
  });
  return Movie;
};
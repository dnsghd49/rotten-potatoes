"use-strict"
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate({ Rating }) {

      // ratings 
      Movie.hasMany(Rating, {
        foreignKey: "rating_id",
        as: "ratings"
      })
    }
  }
  Movie.init({
    movie_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STING
    }
  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies'
  });
  return Movie;
};
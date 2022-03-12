const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Rating extends Model {
      static associate({User, Movie}) {
         // user
         Rating.belongsTo(User, {
          foreignKey: "user_id",
          as: "users"
        })
        Rating.belongsTo(Movie, {
            foreignKey: "movie_id",
            as: "movies"
          })
      }
    }
    Rating.init({
      rating_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      movie_greet_id: DataTypes.INTEGER,
      rating: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Rating',
      tableName: 'ratings'
    });
    return Rating;
  };
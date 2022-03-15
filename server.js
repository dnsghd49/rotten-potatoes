// DEPENDENCIES
// const path = require("path");
const express = require("express");
const app = express()
const { Sequelize } = require('sequelize')


const port = process.env.PORT || 3001;

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate()
    // console.log(`Connected with Sequelize at ${process.env.PG_URI}`)
} catch (err) {
    console.log(`Unable to connect to PG: ${err}`)
}

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Rotten Potatoes'
    })
})


// app.get("*", (req, res) => {
//   // res.sendFile(path.join(publicPath, "index.html"));
// });

// CONTROLLERS 
const usersController = require('./controllers/user_controller')
app.use('/users', usersController)

const ratingsController = require('./controllers/rating_controller')
app.use('/ratings', ratingsController)

const moviesController = require('./controllers/movie_controller')
app.use('/movies', moviesController)

// require('./Routes/user_routes');
// require('./Routes/movie_routes');
// require('./Routes/rating_routes');
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});

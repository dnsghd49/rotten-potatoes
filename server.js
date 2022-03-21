// DEPENDENCIES
// const path = require("path");
const express = require("express");
const app = express()
const { Sequelize } = require('sequelize')

const port = process.env.PORT || 3001;

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json()) // recognize requests objects a JSON objects
app.use(express.static('build'));
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
// create a connection to database
const sequelize = new Sequelize(process.env.PG_URI, 
    { 
        ssl: {require: false} // dont check for ssl cert
    }
)

try {
    sequelize.authenticate() 
    // console.log(`Connected with Sequelize at ${process.env.PG_URI}`)/
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Rotten Potatoes'
    })
})

// CONTROLLERS 
const usersController = require('./controllers/user_controller')
app.use('/users', usersController)

const ratingsController = require('./controllers/rating_controller')
app.use('/ratings', ratingsController)

const moviesController = require('./controllers/movie_controller')
app.use('/movies', moviesController)

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});

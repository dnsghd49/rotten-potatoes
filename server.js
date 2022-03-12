// const path = require("path");
const express = require("express");

// DEPENDENCIES
const app = express()
const { Sequelize } = require('sequelize')

const port = process.env.PORT || 3000;

// CONTROLLERS 
const userController = require('./src/controllers/user_controller')
app.use('/user', userController)

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
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

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

// DEPENDENCIES
const ratings = require('express').Router()
const db = require('../models')
const { User, Movie, Rating } = db 
const { Op } = require('sequelize')

// FIND ALL Ratings
ratings.get('/', async (req, res) => {
    try {
        const foundRating = await Rating.findAll({
            // order: [[ 'date', 'ASC' ]],
            // where: {
            //     name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            // }
        })
        res.status(200).json(foundRating)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Rating
ratings.get('/:id', async (req, res) => {
    try {
        const foundRating = await Rating.findOne({
            where: { name: req.params.name },
            include: [
                { 
                    model: User, 
                    as: "users", 
                    attributes: { exclude: [ "user_id", "password", "email" ] },
                    include: {
                         model: User, 
                         as: "users", 
                    }
                },
                {
                    model: Movie,
                    as: "movies",
                    attributes: { exclude: [ "movie_id" ] },
                    include: {
                        model: Movie,
                        as: "movies"
                    }
                } 
            ]
        })
        res.status(200).json(foundRating)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Rating
ratings.post('/', async (req, res) => {
    try {
        const newRating = await Rating.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new rating',
            data: newRating
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A Rating
ratings.put('/:id', async (req, res) => {
    try {
        const updatedRatings = await Rating.update(req.body, {
            where: {
                rating_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedRatings} rating(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A Rating
ratings.delete('/:id', async (req, res) => {
    try {
        const deletedRatings = await Rating.destroy({
            where: {
                rating_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedRatings} rating(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = ratings
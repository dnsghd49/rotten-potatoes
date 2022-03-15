// DEPENDENCIES
const moviesRouter = require('express').Router()
const db = require('../models')
const { Movie, Rating } = db 
const { Op } = require('sequelize')

// // FIND ALL Movies
moviesRouter.get('/', async (req, res) => {
    try {
        console.log("movies array");
        const foundMovies = await Movie.findAll({
        //     order: [['email', 'ASC']],
        //     where: {
        //         name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
        //     }
        })
        res.status(200).json(foundMovies)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC Movie
moviesRouter.get('/:name', async (req, res) => {
    try {
        const foundMovie = await Movie.findOne({
            where: { name: req.params.name },
            include: [
                { 
                    model: Rating, 
                    as: "ratings", 
                    attributes: { exclude: ["user_id", "movie_id"] },
                    include: { 
                        model: Rating, 
                        as: "ratings", 
                        where: { name: { [Op.like]: `%${req.query.rating ? req.query.rating : ''}%` } } 
                    }
                }
            ],
            order: [
                // [{ model: MeetGreet, as: "meet_greets" }, { model: Event, as: "events" }, 'date', 'DESC'],
                [{ model: Rating, as: "ratings" }, 'DESC']
            ]
        })
        res.status(200).json(foundMovie)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A Moive
moviesRouter.post('/', async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new movie',
            data: newMovie
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A Movie
moviesRouter.put('/:id', async (req, res) => {
    try {
        const updatedMovie = await Movie.update(req.body, {
            where: {
                movie_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedMovie} movie(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A Movie
moviesRouter.delete('/:id', async (req, res) => {
    try {
        const deletedMovie = await Movie.destroy({
            where: {
                movie_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedMovie} movie(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = moviesRouter
// DEPENDENCIES
const userRouter = require('express').Router()
const db = require('../models')
const { User, Rating } = db 
const { Op } = require('sequelize')

// // FIND ALL Users
userRouter.get('/', async (req, res) => {
    try {
        const foundUsers = await User.findAll(
            {
            order: [['email', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        }
        )
        console.log("found users",foundUsers)
        res.status(200).json(foundUsers)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC User
userRouter.get('/:name', async (req, res) => {
    try {
        const foundUser = await User.findOne({
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
        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

// // CREATE A USER
userRouter.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new user',
            data: newUser
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A User
userRouter.put('/:id', async (req, res) => {
    try {
        const updatedUsers = await User.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedUsers} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A USER
userRouter.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUser} user(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = userRouter
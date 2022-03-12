// DEPENDENCIES
const users = require('express').Router()
const db = require('../models')
const { User } = db 
const { Op } = require('sequelize')

// // FIND ALL Users
users.get('/users', async (req, res) => {
    try {
        const foundUsers = await User.findAll({
            order: [['email', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// // FIND A SPECIFIC User
// users.get('/:name', async (req, res) => {
//     try {
//         const foundUser = await User.findOne({
//             where: { name: req.params.name },
//             // include: [
//             //     { 
//             //         model: Rating, 
//             //         as: "ratings", 
//             //         attributes: { exclude: ["user_id", "movie_id"] },
//             //         include: { 
//             //             model: Rating, 
//             //             as: "ratings", 
//             //             where: { name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } } 
//             //         }
//             //     }
//             //     }
//             // ],
//             // order: [
//             //     [{ model: MeetGreet, as: "meet_greets" }, { model: Event, as: "events" }, 'date', 'DESC'],
//             //     [{ model: SetTime, as: "set_times" }, { model: Event, as: "events" }, 'date', 'DESC']
//             // ]
//         })
//         res.status(200).json(foundUser)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// CREATE A USER
users.post('/signup', async (req, res) => {
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

// // UPDATE A BAND
// users.put('/:id', async (req, res) => {
//     try {
//         const updatedUsers = await User.update(req.body, {
//             where: {
//                 band_id: req.params.id
//             }
//         })
//         res.status(200).json({
//             message: `Successfully updated ${updatedUsers} user(s)`
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// // DELETE A USER
// users.delete('/:id', async (req, res) => {
//     try {
//         const deletedUsers = await User.destroy({
//             where: {
//                 user_id: req.params.id
//             }
//         })
//         res.status(200).json({
//             message: `Successfully deleted ${deletedUsers} user(s)`
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// EXPORT
module.exports = users
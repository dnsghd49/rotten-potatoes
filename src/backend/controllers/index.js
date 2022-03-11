const pool = require('.../dbConfig');

const getUsers = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const createUser = (body) => {
    return new Promise(function(resolve, reject) {
      const { name, email } = body
      pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new user has been added added: ${results.rows[0]}`)
      })
    })
  }
  const deleteUser = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(req.params.id)
      pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`User deleted with ID: ${id}`)
      })
    })
  }
  
  module.exports = {
    getUsers,
    createUser,
    deleteUser,
  }
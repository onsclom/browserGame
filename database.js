const Pool = require('pg').Pool
require('dotenv').config() //this is to read DATABASE_URL from .env

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

// pool.query('SELECT * FROM main ORDER BY score ASC', (err, res) => {
//     console.log(err, res)
//     pool.end()
// })

const getUsers = (request, response) => {
  pool.query('SELECT * FROM main', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
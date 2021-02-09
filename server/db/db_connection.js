require('dotenv').config()
const mysql = require('mysql')

const connection = mysql.createPool({
  connectionLimit : 10,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

module.exports = {
  connection,
  query: (query = '', values = []) => new Promise((res, rej) => {
    connection.query(query, values, (err, results, fields) => {
      if(err) rej(err)
      res([results, fields])
    })
  })
}

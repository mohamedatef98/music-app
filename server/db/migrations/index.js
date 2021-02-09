require('dotenv').config()
const mysql = require('mysql')
const migration = require('mysql-migrations')

const connection = mysql.createPool({
  connectionLimit : 10,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

migration.init(connection, __dirname, function() {
  console.log('finished running migrations')
})

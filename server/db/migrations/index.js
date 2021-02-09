const { connection } = require('../db_connection')
const migration = require('mysql-migrations')

migration.init(connection, __dirname, function() {
  console.log('finished running migrations')
})

require('dotenv').config()
const { connection } = require('./db/db_connection')
const User = require('./db/models/User')

async function main () {
  console.log(await User.getAll())
}
main ()

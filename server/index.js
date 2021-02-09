require('dotenv').config()
const { connection } = require('./db/db_connection')
const User = require('./db/models/User')

async function main (params) {
  console.log(await User.create({ username: 'ALi Esmaa', password: 'I lobe big sa;lmd;slmd', repeat_password: 'I lobe big sa;lmd;slmd', email: 'tet2s@test.cpm' }))  
}
main ()

const Joi = require('joi')
const { query } = require('../db_connection')

const schema = Joi.object({
  username: Joi.string()
    .required()
    .alphanum()
    .min(5)
    .max(30),

  password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),

  repeat_password: Joi.ref('password'),

  email: Joi.string()
    .email({ minDomainSegments: 2 })
})

module.exports = {
  async create({ username, email, password, repeat_password }) {
    schema.validate({ username, email, password, repeat_password })

    await query('INSERT INTO User (username, email, password) values(?, ?, ?);', [username, email, password])
    const [[user]] = await query('SELECT id, username, email FROM User WHERE email = ?', [email])
    return user
  },

  async getAll() {
    const [users] = await query('SELECT id, username, email FROM User;', [])
    return users
  },
  async getById(id) {
    const [[user]] = await query('SELECT id, username, email FROM User WHERE id = ?;', [id])
    return user
  },
  async deleteById(id) {
    const res = await query('DELETE FROM User WHERE id = ?;', [id])
    return 1
  }
}
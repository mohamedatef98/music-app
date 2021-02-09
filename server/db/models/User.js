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
    const [[user]] = await query('SELECT username, email FROM User WHERE email = ?', [email])
    return user
  }
}
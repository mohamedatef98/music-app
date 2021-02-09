const Joi = require('joi')
const { query } = require('../db_connection')

const schema = Joi.object({
  name: Joi.string()
    .required(),

  directory: Joi.string()
    .required()
    .valid('images', 'audio'),
})

module.exports = {
  async create({ name, directory, file }) {
    schema.validate({ name, directory })

    const [results] = await query('INSERT INTO File (name, directory) values(?, ?);', [name, directory])
    const [[fileRecord]] = await query('SELECT id, name, directory FROM File WHERE id = ?', [results.insertId])
    return fileRecord
  }
}
const Joi = require('joi')
const { query } = require('../db_connection')
const { createFile } = require('../../fs')

const schema = Joi.object({
  name: Joi.string()
    .required(),

  directory: Joi.string()
    .required()
    .valid('images', 'audio'),

  file: Joi.binary()
    .required()
})

module.exports = {
  async create({ name, directory, file }) {
    schema.validate({ name, directory, file })

    createFile(directory, name, file)
    const [results] = await query('INSERT INTO File (name, directory) values(?, ?);', [name, directory])
    const [[fileRecord]] = await query('SELECT id, name, directory FROM File WHERE id = ?', [results.insertId])
    return fileRecord
  }
}
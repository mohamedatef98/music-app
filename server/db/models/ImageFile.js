const Joi = require('joi')
const { query } = require('../db_connection')
const File = require('./File')

const schema = Joi.object({
  name: Joi.string()
    .required(),

  file: Joi.binary()
    .required()
})

module.exports = {
  async create({ name, file }) {
    schema.validate({ name, file })
    const fileRecord = await File.create({ name, directory: 'image', file })

    const [results] = await query('INSERT INTO ImageFile (fileId) values(?);', [fileRecord.id])
    const [[imageFileRecord]] = await query('SELECT fileId FROM ImageFile WHERE fileId = ?', [fileRecord.id])
    return imageFileRecord
  }
}
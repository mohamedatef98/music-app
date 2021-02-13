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
    const fileRecord = await File.create({ name, directory: 'audio', file })

    const [results] = await query('INSERT INTO AudioFile (fileId) values(?);', [fileRecord.id])
    const [[audioFileRecord]] = await query('SELECT fileId FROM AudioFile WHERE fileId = ?', [fileRecord.id])
    return audioFileRecord
  }
}
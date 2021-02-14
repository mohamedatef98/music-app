const Joi = require('joi')
const { query } = require('../db_connection')

const schema = Joi.object({
  name: Joi.string()
    .required()
    .alphanum()
    .min(2)
    .max(30),

  audioFileId: Joi.number().required()
})

module.exports = {
  async create({ name, audioFileId }) {
    schema.validate({ name, audioFileId })

    const [results] = await query('INSERT INTO Song (name, audioFileId) values(?, ?);', [name, audioFileId])
    const [[song]] = await query('SELECT id, name, audioFileId FROM Song WHERE id = ?', [results.insertId])
    return song
  },

  async getAll() {
    const [songs] = await query('SELECT id, name, audioFileId FROM Song;', [])
    return songs
  },
  async getById(id) {
    const [[song]] = await query('SELECT id, name, audioFileId FROM Song WHERE id = ?;', [id])
    return song
  },
  async getAudioFileById(id) {
    const [[audioFile]] = await query(
      `SELECT * FROM File WHERE id IN (
        SELECT audioFileId FROM Song WHERE id = ?
      );`,
      [id]
    )
    return audioFile
  }
}
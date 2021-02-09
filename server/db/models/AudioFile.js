const { query } = require('../db_connection')
const File = require('./File')

module.exports = {
  async create({ name, directory, file }) {
    const fileRecord = await File.create({ name, directory, file })

    const [results] = await query('INSERT INTO AudioFile (fileId) values(?);', [fileRecord.id])
    const [[audioFileRecord]] = await query('SELECT fileId FROM AudioFile WHERE id = ?', [results.insertId])
    return audioFileRecord
  }
}
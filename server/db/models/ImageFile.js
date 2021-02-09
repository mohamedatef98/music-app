const { query } = require('../db_connection')
const File = require('./File')

module.exports = {
  async create({ name, directory, file }) {
    const fileRecord = await File.create({ name, directory, file })

    const [results] = await query('INSERT INTO ImageFile (fileId) values(?);', [fileRecord.id])
    const [[imageFileRecord]] = await query('SELECT fileId FROM ImageFile WHERE id = ?', [results.insertId])
    return imageFileRecord
  }
}
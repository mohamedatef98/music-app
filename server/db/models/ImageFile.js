const { query } = require('../db_connection')
const File = require('./File')

module.exports = {
  async create({ name, file }) {
    const fileRecord = await File.create({ name, directory: 'images', file })

    const [results] = await query('INSERT INTO ImageFile (fileId) values(?);', [fileRecord.id])
    const [[imageFileRecord]] = await query('SELECT fileId FROM ImageFile WHERE fileId = ?', [fileRecord.id])
    return imageFileRecord
  }
}
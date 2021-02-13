const Joi = require('joi')
const { query } = require('../db_connection')

const schema = Joi.object({
  name: Joi.string()
    .required()
    .alphanum()
    .min(3)
    .max(30),

  imageFileId: [
    Joi.string().equal('NULL'),
    Joi.number()
  ]
})

module.exports = {
  async create({ name, imageFileId='NULL' }) {
    schema.validate({ name, imageFileId })

    const [results] = await query('INSERT INTO Artist (name, imageFileId) values(?, ?);', [name, imageFileId])
    const [[artist]] = await query('SELECT id, name, imageFileId FROM Artist WHERE id = ?', [results.insertId])
    return artist
  },

  async getAll() {
    const [artists] = await query('SELECT id, name, imageFileId FROM Artist;', [])
    return artists
  },
  async getById(id) {
    const [[artist]] = await query('SELECT id, name, imageFileId FROM Artist WHERE id = ?;', [id])
    return artist
  }
}
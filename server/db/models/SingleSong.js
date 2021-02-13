const Joi = require('joi')
const { query } = require('../db_connection')

const schema = Joi.object({
  songId: Joi.number()
    .required(),

  artistId: Joi.number()
    .required(),

  imageFileId: [
    Joi.number(),
    Joi.string().equal('NULL')
  ],

  releaseDate: Joi.date()
    .required()
})

module.exports = {
  async create({ songId, artistId, imageFileId='NULL', releaseDate }) {
    schema.validate({ songId, artistId, imageFileId, releaseDate })

    const [results] = await query(
      'INSERT INTO SingleSong (songId, artistId, imageFileId, releaseDate) values(?, ?);',
      [songId, artistId, imageFileId, releaseDate]
    )
    const [[song]] = await query(
      'SELECT songId, artistId, imageFileId, releaseDate FROM SingleSong WHERE songId = ?',
      [songId]
    )
    return song
  },

  async getAll() {
    const [songs] = await query('SELECT songId, artistId, imageFileId, releaseDate FROM SingleSong;', [])
    return songs
  },
  async getByArtistId(artistId) {
    const [singles] = await query(
      'SELECT songId, artistId, imageFileId, releaseDate FROM SingleSong WHERE artistId = ?;',
      [artistId]
    )
    return singles
  }
}
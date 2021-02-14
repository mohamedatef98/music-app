const Artist = require('./db/models/Artist')
const SingleSong = require('./db/models/SingleSong')
const Song = require('./db/models/Song')
module.exports = {
  Query: {
    artists() {
      return Artist.getAll()
    },
    artistSingles(_, { artistId }) {
      return SingleSong.getByArtistId(artistId)
    }
  },
  SingleSong: {
    id({ songId }) {
      return songId
    },
    name({ songId }) {
      return Song.getById(songId).then(({ name }) => name)
    },
    audioFileId({ songId }) {
      return Song.getById(songId).then(({ audioFileId }) => audioFileId)
    },
    artist({ artistId }) {
      return Artist.getById(artistId)
    }
  },
  Song: {
    __resolveType(song) {
      if(song.artistId) return 'SingleSong'
      else if(song.albumId) return 'AlbumSong'
      else return null
    }
  }
}

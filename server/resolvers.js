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
      return Song.getById(songId)
        .then(({ name }) => name)
    },
    artist({ artistId }) {
      return Artist.getById(artistId)
    },
    audioFile({ songId }) {
      return Song.getAudioFileById(songId)
    },
    imageFile({ songId }) {
      return SingleSong.getImageFileById(songId)
    }
  },
  Song: {
    __resolveType(song) {
      if(song.artistId) return 'SingleSong'
      else if(song.albumId) return 'AlbumSong'
      else return null
    }
  },
  Artist: {
    imageFile({ id }) {
      return Artist.getImageFileById(id)
    }
  }
}

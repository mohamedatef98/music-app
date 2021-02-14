const { gql } = require('apollo-server')

module.exports = gql`
type Artist {
  id: ID!
  name: String!
  imageFile: File
}

type File {
  id: ID!
  name: String!
  directory: String!
}

interface Song {
  id: ID!
  name: String!
  audioFile: File!
  imageFile: File
}

type SingleSong implements Song {
  id: ID!
  name: String!
  audioFile: File!
  imageFile: File
  artist: Artist!
  releaseDate: String!
}

type Query {
  artists: [Artist]!
  artistSingles(artistId: ID!): [SingleSong]!
}

`

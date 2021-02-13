const { gql } = require('apollo-server')

module.exports = gql`
type Artist {
  id: ID!
  name: String!
}

interface Song {
  id: ID!
  name: String!
}

type SingleSong implements Song {
  id: ID!
  name: String!
  artist: Artist!
  releaseDate: String!
}

type Query {
  artists: [Artist]!
  artistSingles(artistId: ID!): [SingleSong]!
}

`

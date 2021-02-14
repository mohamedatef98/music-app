require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const resolvers = require('./resolvers')
const typeDefs = require('./schema')
const rootDir = require('./fs/rootDir')

const app = express()
app.use(express.static(rootDir))

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`Graphql server is running at port ${4000}`))

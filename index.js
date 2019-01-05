const {ApolloServer, gql} = require('apollo-server-express');
const { typeDefs } = require('./type_defs');
const resolvers = {};
const { mocks } = require('./mock');

const server = new ApolloServer({typeDefs, resolvers, mocks });
const express = require('express');
const app = express();

server.applyMiddleware({app, path: '/graphql'});

app.listen({port: 4000}, () =>
  console.log(
    `Server started at http://localhost:4000${server.graphqlPath}`
  )
);
const {ApolloServer, gql} = require('apollo-server-express');
const { typeDefs } = require('./type_defs');
let posts = [
  {id:1, title: 'title1', content: 'content1', createdAt: '2018-12-01-T00:00:00'}
];
let comments = [
  {id:1, content: 'comment-content1', postId:1, createdAt: '2018-12-01-T00:00:00'}
];
const resolvers = {
  Query: {
    posts() {
      return posts;
    }
  },
  Post: {
    comments(post) {
      return comments.filter(
        (comment) => { return comment.postId === post.id;}
      )
    },
    postedAt(post) {
      return post.createdAt;
    }
  },
  Comment: {
    commentedAt(comment) {
      return comment.createdAt;
    }
  }
};
const server = new ApolloServer({typeDefs, resolvers});
const express = require('express');
const app = express();

server.applyMiddleware({app, path: '/graphql'});

app.listen({port: 4000}, () =>
  console.log(
    `Server started at http://localhost:4000${server.graphqlPath}`
  )
);
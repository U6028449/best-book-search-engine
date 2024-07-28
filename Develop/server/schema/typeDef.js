// server/schema/typeDefs.js

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    description: String
    publishedDate: String
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, description: String, publishedDate: String): Book
    updateBook(id: ID!, title: String, author: String, description: String, publishedDate: String): Book
    deleteBook(id: ID!): Book
  }
`;

module.exports = typeDefs;
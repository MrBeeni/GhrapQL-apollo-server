const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type user {
    id: ID
    name: String
    email: String
  }
  type Query {
    hello: String
    getUser: [user]
    getUserById(id: ID): user
  }

  input userInput {
    name: String
    email: String
  }

  type Mutation {
    createUser(user: userInput): user
    deleteUser(id: ID): String
    updateUser(id: ID, user: userInput): user
  }
`;

module.exports = typeDefs;

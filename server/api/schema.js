const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");
const typeDefs = `



  type Tag {
    id: ID
    title: String
  }

  type User {
    id: ID
    email: String
    fullname: String
    shareditems: [Item]
    imageurl: String
  }

  type Item {
    id: ID
    title: String
    itemowner: User
    borrower: User
    imageurl: String
    description: String
    available: Boolean
    tags:[Tag]
  }

  type Query {
    
    items: [Item]
    users: [User]
    user(id: ID): User
    item(id: ID):Item
  },
  
`;

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});

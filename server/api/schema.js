module.exports = `

  type Tag {
    id: ID
    title: String
  }

  type User {
    id: ID
    bio: String
    email: String
    fullname: String
    shareditems: [Item]
    borroweditems: [Item]
    
  }

  type Item {
    id: ID
    title: String
    created: String
    itemowner: User
    borrower: User
    imageurl: String
    description: String
    available: Boolean
    tags:[Tag]
  }

  input TagInput {
    id: ID
    title: String
  }

  input AddItemInput {
      imageurl: String
      title: String
      description: String
      tags:[TagInput]
  }

  input UpdateItem {
      id: ID
    title: String
    created: String
    itemowner: String
    borrower: String
    imageurl: String
    description: String
    available: Boolean
    tags:[TagInput]
  }

  
  type Mutation {
    addItem (newItem: AddItemInput): Item
    updateItem (updatedItem: UpdateItem): Item
  }

  type Query {
    
    items: [Item]
    users: [User]
    mutation: [Mutation]
    user(id: ID): User
    item(id: ID):Item
    
  },
  
`;

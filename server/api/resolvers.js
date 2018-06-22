const fetch = require("node-fetch");

module.exports = ({
  postgresResource: {
    getItem,
    getItems,
    getTags,
    getSharedItems,
    getBorrowedItems,
    createItem
  },
  firebaseResource: { getUser, getUsers }
}) => {
  return {
    Query: {
      items() {
        return getItems();
      },
      users() {
        return getUsers();
      },
      user(root, { id }) {
        return getUser(id);
      },
      item(root, { id }) {
        return getItem(id);
      }
    },
    Item: {
      itemowner(item) {
        return getUser(item.itemowner);
      },
      borrower(item) {
        if (item.borrower) {
          // return fetch(`${USERS_URL}/${item.borrower}`).then(r => r.json());
          return getUser(item.borrower);
          // } else {
          //   return null;
        }
      },
      async tags(item) {
        return await getTags(item.id);
      }
    },
    User: {
      shareditems(user) {
        return getSharedItems(user.id);
      },
      borroweditems(user) {
        return getBorrowedItems(user.id);
      }
    },
    Mutation: {
      createNewItem(root, { newItem }, context) {
        console.log(newItem);
        console.log(root);
        console.log(context);
        return createItem(newItem);
      }
    }
  };
};

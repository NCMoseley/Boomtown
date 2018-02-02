const fetch = require("node-fetch");

module.exports = ({
  postgresResource: {
    getItem,
    getItems,
    getTags,
    getSharedItems,
    getBorrowedItems
  },
  firebaseResource: { getUser, getUsers }
}) => {
  return {
    Query: {
      items() {
        // return fetch(ITEMS_URL).then(r => r.json());
        return getItems();
      },
      users() {
        // return fetch(USERS_URL).then(r => r.json());
        return getUsers();
      },
      user(root, { id }) {
        // return fetch(`${USERS_URL}/${id}`).then(r => r.json());
        return getUser(id);
      },
      item(root, { id }) {
        // return fetch(`${ITEMS_URL}/${id}`).then(r => r.json());
        return getItem(id);
      }
    },
    Item: {
      itemowner(item) {
        // return fetch(`${USERS_URL}/${item.itemowner}`).then(r => r.json());
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
        // const i = await fetch(`${ITEMS_URL}/${item.id}`).then(r => r.json());
        return await getTags(item.id);
      }
    },
    User: {
      shareditems(user) {
        // return fetch(`${ITEMS_URL}/?itemowner=${user.id}`).then(r => r.json());
        return getSharedItems(user.id);
      },
      borroweditems(user) {
        return getBorrowedItems(user.id);
      }
    },
    Mutation: {
      addItem(root, { newItem: { title } }) {
        console.log({ title });
        return { title };
      }
    }
  };
};
// module.exports = resolveFunctions;

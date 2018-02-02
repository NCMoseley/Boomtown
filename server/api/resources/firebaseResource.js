const firebase = require("firebase");
require("firebase/auth");

module.exports = app => {
  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(app.get("FIREBASE_CONFIG"));
  const db = firebaseApp.database();

  return {
    //NOTE
    async getUsers() {
      const uusers = await db
        .ref("users")
        .once("value")
        .val();
      const userList = [];
      Object.keys(users, userid => {
        userList.push({
          id: userid,
          email: users[userid].email,
          bio: users[userid].bio,
          fullname: users[userid].fullname
          // NOTE
        });
      });
      return userList;
    },

    async getUser(userid) {
      let user = await db.ref(`users/${userid}`).once("value");
      user = user.val();
      console.log(user);
      return {
        id: userid,
        ...user
      };
    }
  };
};

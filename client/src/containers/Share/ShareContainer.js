import React, { Component } from "react";
import Share from "./Share";
import PropTypes from "prop-types";
import firebase from "firebase";
import { firebaseAuth } from "../../config/firebaseConfig";

// console.log(firebaseAuth.currentUser.uid);

export default class ShareContainer extends Component {
  render() {
    // var userId = firebaseAuth.currentUser.uid;

    // return firebase
    //   .database()
    //   .ref("/users/" + userId)
    //   .once("value")
    //   .then(function(snapshot) {
    //     var username =
    //       (snapshot.val() && snapshot.val().username) || "Anonymous";
    //     console.log(userId);
    //     console.log(firebaseAuth.currentUser.uid);
    //   });
    return <Share share={this.share} />;
  }
}

import * as firebase from "firebase";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyClOuAcOTLu5WImEqEMK-L-b3_mKKOwnWA",
  authDomain: "boomtown-8cc79.firebaseapp.com",
  databaseURL: "https://boomtown-8cc79.firebaseio.com",
  projectId: "boomtown-8cc79",
  storageBucket: "boomtown-8cc79.appspot.com",
  messagingSenderId: "478312715806"
};

const firebaseApp = firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth();
export { firebaseApp, firebaseAuth };

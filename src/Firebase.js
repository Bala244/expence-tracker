import firebase from "firebase/app";

require("dotenv").config();

const Firebase = firebase.initializeApp({
  apiKey: "AIzaSyDGI_01vw1NkUja2YZMn2zBlwWsLktyFPg",
  authDomain: "expense-tracker-f3c55.firebaseapp.com",
  projectId: "expense-tracker-f3c55",
  storageBucket: "expense-tracker-f3c55.appspot.com",
  messagingSenderId: "467953948479",
  appId: "1:467953948479:web:09d3d0178ab793491f658a",
  measurementId: "G-W49X9X5JDH",
});
let firestore = firebase.firestore();

export { firestore };

export default Firebase;

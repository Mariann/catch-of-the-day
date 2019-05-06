import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCmZzEpHtFiFCe1tO2nusH6iQ-1szfVIqM",
  authDomain: "catch-of-the-day-mariann.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mariann.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//this is a default export
export default base;

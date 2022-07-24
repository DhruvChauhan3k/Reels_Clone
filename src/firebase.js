import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA1eXHBXM5IuU-RBfmi4e8JrD3UQk_dfgY",
    authDomain: "ig-reels-744cd.firebaseapp.com",
    projectId: "ig-reels-744cd",
    storageBucket: "ig-reels-744cd.appspot.com",
    messagingSenderId: "96618422541",
    appId: "1:96618422541:web:b9d49978b401a71eda5044",
    measurementId: "G-HCZ67BJWQR"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
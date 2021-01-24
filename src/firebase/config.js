import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-chat-cad7a.firebaseapp.com",
  projectId: "react-chat-cad7a",
  storageBucket: "react-chat-cad7a.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

export { firebase, firestore, analytics, auth };

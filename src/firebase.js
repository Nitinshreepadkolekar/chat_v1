import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuVbFex8x1wf8YLpQjpq1wXMLKZLfsPbo",
  authDomain: "chat-6604d.firebaseapp.com",
  projectId: "chat-6604d",
  storageBucket: "chat-6604d.appspot.com",
  messagingSenderId: "597519790267",
  appId: "1:597519790267:web:151fe1e33dc3112da9399e"
};

// Check if Firebase app is already initialized before initializing it
const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

export const auth = app.auth();










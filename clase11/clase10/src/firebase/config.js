import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCJi_KzwFKCVObPK3k3c7Wy0E9E0RfYU5E",
    authDomain: "clase11-f2114.firebaseapp.com",
    projectId: "clase11-f2114",
    storageBucket: "clase11-f2114.firebasestorage.app",
    messagingSenderId: "615057144035",
    appId: "1:615057144035:web:7915fe35b9d3a2f36a6dd6"
  };


app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();

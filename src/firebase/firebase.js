// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2a4pUQ-mYWGnGlsMySBP2MUbL4Njd-0Q",
  authDomain: "adios-b64a7.firebaseapp.com",
  databaseURL:
    "https://adios-b64a7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "adios-b64a7",
  storageBucket: "adios-b64a7.appspot.com",
  messagingSenderId: "250790525041",
  appId: "1:250790525041:web:cf2b3f8012a8e0be2183d0",
  measurementId: "G-02RL0LW2KK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

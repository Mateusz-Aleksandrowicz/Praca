// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE6-iPe3fBTUjevMBUbHL8-f-3P2ifj6Y",
  authDomain: "befit-51c7f.firebaseapp.com",
  projectId: "befit-51c7f",
  storageBucket: "befit-51c7f.appspot.com",
  messagingSenderId: "373578327982",
  appId: "1:373578327982:web:97dfa0b905babf45664a3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();
export const storage = new getStorage(app);

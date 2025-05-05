// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkeThdNnR_T6tQznG2CwdVJyfxcw6mypc",
  authDomain: "prepwise-12874.firebaseapp.com",
  projectId: "prepwise-12874",
  storageBucket: "prepwise-12874.firebasestorage.app",
  messagingSenderId: "428879211058",
  appId: "1:428879211058:web:f3663578f2f6755c182a2b",
  measurementId: "G-R2FZEJ958Z"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
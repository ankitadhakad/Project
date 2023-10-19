// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-9e03c.firebaseapp.com",
  projectId: "mern-state-9e03c",
  storageBucket: "mern-state-9e03c.appspot.com",
  messagingSenderId: "773756433457",
  appId: "1:773756433457:web:96db94316f094d162ed110"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
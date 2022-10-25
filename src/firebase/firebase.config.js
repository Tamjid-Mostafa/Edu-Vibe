// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmMrhaUyhUPfKnqeptqseP1AmAXqUB0sI",
  authDomain: "edu-vibe.firebaseapp.com",
  projectId: "edu-vibe",
  storageBucket: "edu-vibe.appspot.com",
  messagingSenderId: "972570519088",
  appId: "1:972570519088:web:4f2a27b38fb10e1d7f6ff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF2z4a4sGFQcKrABfA8HjLLjRSzNtC0Cs",
  authDomain: "a-game-library-f3c15.firebaseapp.com",
  projectId: "a-game-library-f3c15",
  storageBucket: "a-game-library-f3c15.firebasestorage.app",
  messagingSenderId: "587103101935",
  appId: "1:587103101935:web:a192f88138be018ba8cc1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
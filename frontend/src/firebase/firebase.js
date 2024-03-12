// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyC7D6WvLXQ_7YuJa6qEsWQWHEl5s5BTzAU",
    authDomain: "pk-pexels.firebaseapp.com",
    projectId: "pk-pexels",
    storageBucket: "pk-pexels.appspot.com",
    messagingSenderId: "159175208752",
    appId: "1:159175208752:web:dae4987cc7e5239020e2f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
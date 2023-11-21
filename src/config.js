// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqNscpK6WdZHJIis3P4eOizc68HF5rphk",
    authDomain: "race-later-list.firebaseapp.com",
    databaseURL: "https://race-later-list-default-rtdb.firebaseio.com",
    projectId: "race-later-list",
    storageBucket: "race-later-list.appspot.com",
    messagingSenderId: "645190803705",
    appId: "1:645190803705:web:3802d9bb9cd1daf8560228"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

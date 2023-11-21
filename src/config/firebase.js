// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
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
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
const db = getFirestore(app);

export const todosCollection = collection(db, "todos");

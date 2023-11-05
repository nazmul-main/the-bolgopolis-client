// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBco0W59a7GRtRvyZvQO-yYLovHe5nD5Zc",
  authDomain: "the-blogopolis.firebaseapp.com",
  projectId: "the-blogopolis",
  storageBucket: "the-blogopolis.appspot.com",
  messagingSenderId: "308235934847",
  appId: "1:308235934847:web:2db63d0f593e3b90ca334a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
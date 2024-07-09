// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6NaL30YmPBXn3vXhK6BeZu2zGyteNDJk",
  authDomain: "mern-book-inventor-b222f.firebaseapp.com",
  projectId: "mern-book-inventor-b222f",
  storageBucket: "mern-book-inventor-b222f.appspot.com",
  messagingSenderId: "660118445527",
  appId: "1:660118445527:web:aff79378f786efe6c1bf92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
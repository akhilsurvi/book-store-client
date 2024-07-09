// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbPW5jtsrXP8rQq40DWLdI0Rr9RHt1W_w",
  authDomain: "fir-book-inventory-2de81.firebaseapp.com",
  projectId: "fir-book-inventory-2de81",
  storageBucket: "fir-book-inventory-2de81.appspot.com",
  messagingSenderId: "159855090247",
  appId: "1:159855090247:web:90075b81d5cf3342276f62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBaU4BqNofgdD51EjM-YV53wYv99VH_sQ",
  authDomain: "chatgpt-messenger-b2714.firebaseapp.com",
  projectId: "chatgpt-messenger-b2714",
  storageBucket: "chatgpt-messenger-b2714.appspot.com",
  messagingSenderId: "771427721012",
  appId: "1:771427721012:web:11554dd88dfd9ba2a9cf61",
  measurementId: "G-ZSBZNP6NWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

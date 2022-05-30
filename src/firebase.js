// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWv2X9DaHpuaukaQu9lqjRzP8nPgEoIzQ",
  authDomain: "keeper-app-f5642.firebaseapp.com",
  projectId: "keeper-app-f5642",
  storageBucket: "keeper-app-f5642.appspot.com",
  messagingSenderId: "324104477938",
  appId: "1:324104477938:web:6eb7e6d1b26b7b064f846b",
  measurementId: "G-L30CCQGE1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

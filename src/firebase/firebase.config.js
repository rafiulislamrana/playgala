// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAejcf1Kn4430oAmlqmTfT83Cp2G74u2eA",
  authDomain: "playgala.firebaseapp.com",
  projectId: "playgala",
  storageBucket: "playgala.appspot.com",
  messagingSenderId: "607666904005",
  appId: "1:607666904005:web:89c5e8a1227288eed6c9ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
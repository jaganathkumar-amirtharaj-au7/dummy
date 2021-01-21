// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuNrtRTjxDuBj4vnuuOrco2nlpiRfutyQ",
    authDomain: "weshare-872d2.firebaseapp.com",
    projectId: "weshare-872d2",
    storageBucket: "weshare-872d2.appspot.com",
    messagingSenderId: "347425169502",
    appId: "1:347425169502:web:6b505410e192c58c6fd4cf",
    measurementId: "G-R1X2QRW2SH"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
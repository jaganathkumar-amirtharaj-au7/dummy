import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
firebase.initializeApp( {
  apiKey: "AIzaSyBuNrtRTjxDuBj4vnuuOrco2nlpiRfutyQ",
  authDomain: "weshare-872d2.firebaseapp.com",
  projectId: "weshare-872d2",
  storageBucket: "weshare-872d2.appspot.com",
  messagingSenderId: "347425169502",
  appId: "1:347425169502:web:6b505410e192c58c6fd4cf",
  measurementId: "G-R1X2QRW2SH"
})

// Initialize Firebase

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
    <App />
    {}
    </Fragment>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

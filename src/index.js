import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDynGrDc94G7HIXURBYGus9JYO7hp8IJAE",
  authDomain: "cart-88f3a.firebaseapp.com",
  projectId: "cart-88f3a",
  storageBucket: "cart-88f3a.appspot.com",
  messagingSenderId: "1069850293309",
  appId: "1:1069850293309:web:f602f66823b53a4e25e654"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



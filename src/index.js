import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBoQD896hNeKzKOcq1DilqAFzjSj0ddo7A",
  authDomain: "cart-2d9cb.firebaseapp.com",
  projectId: "cart-2d9cb",
  storageBucket: "cart-2d9cb.appspot.com",
  messagingSenderId: "669533752901",
  appId: "1:669533752901:web:18882235c7e3a4552c9d2c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

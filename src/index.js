import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_5ZhpyjvdUES31IkOi2k3c0bt9MO8gzY",
  authDomain: "cart-91e96.firebaseapp.com",
  projectId: "cart-91e96",
  storageBucket: "cart-91e96.appspot.com",
  messagingSenderId: "438674867976",
  appId: "1:438674867976:web:b25cc9f1b17de840760ebd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

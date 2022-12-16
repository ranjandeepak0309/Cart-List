import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
// import * as  firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration


const firebaseConfig = {
    apiKey: "AIzaSyBBIDyXeyQTimn7IZkqAyLZGFs1BzPFZ8M",
    authDomain: "cart-e8c04.firebaseapp.com",
    projectId: "cart-e8c04",
    storageBucket: "cart-e8c04.appspot.com",
    messagingSenderId: "4331700393",
    appId: "1:4331700393:web:63e888bda3e65d7e6b29b8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db,"firebasedb");
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
export default  db;

 
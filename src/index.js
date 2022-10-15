import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
// import * as  firebase from 'firebase';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
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

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

 
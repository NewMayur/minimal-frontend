// app.js

require('dotenv').config(); // Load environment variables

// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// API URL from environment variables
const apiUrl = process.env.API_URL;

// Fetch the message from the backend
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    document.getElementById('message').textContent = data.message;
  })
  .catch(error => {
    document.getElementById('message').textContent = 'Error fetching message';
    console.error('Error:', error);
  });

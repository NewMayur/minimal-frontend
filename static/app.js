// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYXmIEdDnAzXXj-vW7RGfJ2w5HJXoES5g",
    authDomain: "minimal-dev-14f70.firebaseapp.com",
    projectId: "minimal-dev-14f70",
    storageBucket: "minimal-dev-14f70.appspot.com",
    messagingSenderId: "1073042780772",
    appId: "1:1073042780772:web:31050f2c6f7aa54235a571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Environment-specific API URL
const apiUrls = {
    dev: 'https://minimal-app-1073042780772.asia-south1.run.app/test',
    stag: 'https://minimal-app-stag-50348277979.us-central1.run.app/test',
    prod: 'https://minimal-app-prod-50348277979.us-central1.run.app/test',
    localhost: 'http://127.0.0.1:5000/test'
};

// Determine the environment
const environment = 'dev'; // Change this to 'staging' or 'production' as needed

// Fetch the message from the backend
fetch(apiUrls[environment])
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message;
    })
    .catch(error => {
        document.getElementById('message').textContent = 'Error fetching message';
        console.error('Error:', error);
    });
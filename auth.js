// auth.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBgEBt2dz9FvHubg0RFqX1dtnibmsDpMU",
    authDomain: "neighborhood-helper-47fe2.firebaseapp.com",
    projectId: "neighborhood-helper-47fe2",
    storageBucket: "neighborhood-helper-47fe2.firebasestorage.app",
    messagingSenderId: "473929243581",
    appId: "1:473929243581:web:6dac247932f5a97ec750d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle user registration
document.getElementById('registerForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const errorMessageDiv = document.getElementById('register-error-message');

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            errorMessageDiv.textContent = '';  
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            errorMessageDiv.textContent = error.message;
        });
});

// Handle user login
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorMessageDiv = document.getElementById('login-error-message');

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            errorMessageDiv.textContent = '';
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            errorMessageDiv.textContent = error.message;
        });
});

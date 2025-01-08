import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiFKW9gvlQSRP6ZVCPMq02NQLnkV69Iag",
    authDomain: "doctorappointment-8f969.firebaseapp.com",
    projectId: "doctorappointment-8f969",
    storageBucket: "doctorappointment-8f969.firebasestorage.app",
    messagingSenderId: "999415391434",
    appId: "1:999415391434:web:3a38456740cb1ca5d08033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Get the user ID from URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("uid");

if (userId) {
    // Fetch user data from Firestore
    const userRef = doc(db, "userdetails", userId);
    getDoc(userRef).then((doc) => {
        if (doc.exists()) {
            const user = doc.data();
            const userDetailsDiv = document.getElementById("user-details");
            userDetailsDiv.innerHTML = `
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Account created at: ${user.createdAt.toDate()}</p>
        `;
        } else {
            alert("User not found.");
        }
    }).catch((error) => {
        console.error("Error getting user data: ", error);
        alert("Error fetching user details.");
    });

}


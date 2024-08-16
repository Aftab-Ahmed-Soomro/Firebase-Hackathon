
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail     } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB4_drBfQd6g1P7TEAvY-0DvWhCRdy4G2I",
    authDomain: "quiz-grade-authentication.firebaseapp.com",
    projectId: "quiz-grade-authentication",
    storageBucket: "quiz-grade-authentication.appspot.com",
    messagingSenderId: "936504300570",
    appId: "1:936504300570:web:f210b9ca5b816d7cc2eda3",
    measurementId: "G-EBKY6P8WHV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail     };

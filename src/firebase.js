// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOyaHPN3dC9ZjafVnyhG-jL6GpBXD4cA8",
  authDomain: "dnd-gallery-a8c6b.firebaseapp.com",
  projectId: "dnd-gallery-a8c6b",
  storageBucket: "dnd-gallery-a8c6b.appspot.com",
  messagingSenderId: "707204078880",
  appId: "1:707204078880:web:792b50e3a9910a1d618b45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Fiebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const signIn = signInWithEmailAndPassword;
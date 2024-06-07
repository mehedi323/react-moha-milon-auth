// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuOiLVadluVNZrKafz72IOgODZvddT-us",
  authDomain: "react-moha-milon-auth.firebaseapp.com",
  projectId: "react-moha-milon-auth",
  storageBucket: "react-moha-milon-auth.appspot.com",
  messagingSenderId: "300824547156",
  appId: "1:300824547156:web:cc7a7e9438ec5a8fa982c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
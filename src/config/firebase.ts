// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo6DHbAh1napfHE3roxklJitTOBr3ADUk",
  authDomain: "react-car-3a5d6.firebaseapp.com",
  projectId: "react-car-3a5d6",
  storageBucket: "react-car-3a5d6.appspot.com",
  messagingSenderId: "184549422383",
  appId: "1:184549422383:web:05c191bfb062ceb4cc1dda"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const Providers = {google: new GoogleAuthProvider()}
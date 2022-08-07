// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX1TegJXBEIxjg2VdAPDeR9_ib3lDT-qE",
  authDomain: "fir-practice-e4d78.firebaseapp.com",
  projectId: "fir-practice-e4d78",
  storageBucket: "fir-practice-e4d78.appspot.com",
  messagingSenderId: "1046840606260",
  appId: "1:1046840606260:web:b46398058c1029c6d71461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
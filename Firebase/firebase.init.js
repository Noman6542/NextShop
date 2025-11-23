// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-TVi2VUFaOUoyQRTr4-i11rU_Qr4tRaQ",
  authDomain: "nextshop-21115.firebaseapp.com",
  projectId: "nextshop-21115",
  storageBucket: "nextshop-21115.firebasestorage.app",
  messagingSenderId: "135637337486",
  appId: "1:135637337486:web:dce496ce1c709b5ae810df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
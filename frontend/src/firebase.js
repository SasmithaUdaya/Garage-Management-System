// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "garage-service-281d3.firebaseapp.com",
  projectId: "garage-service-281d3",
  storageBucket: "garage-service-281d3.appspot.com",
  messagingSenderId: "550296629983",
  appId: "1:550296629983:web:bf627b1841997617502f6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
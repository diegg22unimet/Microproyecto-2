// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYoSBRjYNWZw74GnD-C_3IKWMs5ubanxU",
  authDomain: "microproyecto2-a0828.firebaseapp.com",
  projectId: "microproyecto2-a0828",
  storageBucket: "microproyecto2-a0828.appspot.com",
  messagingSenderId: "675816795076",
  appId: "1:675816795076:web:babe4a20032e2110841291"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

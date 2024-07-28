// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAdOhum2jEU8P_kbX-KyD6sKi218b_0Z8",
  authDomain: "firsttwitter-fc8c2.firebaseapp.com",
  projectId: "firsttwitter-fc8c2",
  storageBucket: "firsttwitter-fc8c2.appspot.com",
  messagingSenderId: "782557233205",
  appId: "1:782557233205:web:873351d0b84d9dc64f317c",
  measurementId: "G-E07VDP95Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const storage = getStorage(app)

export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvzpLEcZOcj4Mn_AmhnfmsnfQjkH8rp8M",
  authDomain: "budgetr-4a0ce.firebaseapp.com",
  projectId: "budgetr-4a0ce",
  storageBucket: "budgetr-4a0ce.firebasestorage.app",
  messagingSenderId: "99730386057",
  appId: "1:99730386057:web:c18313f90f9637bed1aa58",
  measurementId: "G-2CF0P5PDD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
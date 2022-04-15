// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmHswcmF1RHjrzKgjEWtLBbv3QvtL9fHM",
  authDomain: "portafolio-50aa1.firebaseapp.com",
  projectId: "portafolio-50aa1",
  storageBucket: "portafolio-50aa1.appspot.com",
  messagingSenderId: "377772150540",
  appId: "1:377772150540:web:88c55f39efb85fd8164329",
  measurementId: "G-EM1S6PRHZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
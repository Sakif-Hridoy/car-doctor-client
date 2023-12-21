// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb9wOYCd-DJtJzDfC2fNSMDOTd4ghfqgQ",
  authDomain: "car-doctor-c45ff.firebaseapp.com",
  projectId: "car-doctor-c45ff",
  storageBucket: "car-doctor-c45ff.appspot.com",
  messagingSenderId: "178493049831",
  appId: "1:178493049831:web:b0f7d96f879a22f7118b42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
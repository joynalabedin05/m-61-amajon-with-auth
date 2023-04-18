// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKHMGW-3OtpbX9a0IW7Y3THd5lbPTw90o",
  authDomain: "ema-jon-with-firebase-au-c9a20.firebaseapp.com",
  projectId: "ema-jon-with-firebase-au-c9a20",
  storageBucket: "ema-jon-with-firebase-au-c9a20.appspot.com",
  messagingSenderId: "697401750670",
  appId: "1:697401750670:web:acf09130cd8932364f85df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
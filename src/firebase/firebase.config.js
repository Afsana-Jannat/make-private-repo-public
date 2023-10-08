// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVcDz6tq5foTHCpLiRvuRRCwodmQahtPo",
  authDomain: "cultural-events-46a18.firebaseapp.com",
  projectId: "cultural-events-46a18",
  storageBucket: "cultural-events-46a18.appspot.com",
  messagingSenderId: "1005903261924",
  appId: "1:1005903261924:web:bf26be9f098b1f7225bcf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
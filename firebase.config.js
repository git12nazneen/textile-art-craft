// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAywybZ7GY9k4cx6g9mRLOFYnm-vp2JxLU",
  authDomain: "textile-with-mongo.firebaseapp.com",
  projectId: "textile-with-mongo",
  storageBucket: "textile-with-mongo.appspot.com",
  messagingSenderId: "354554948245",
  appId: "1:354554948245:web:8983d2819b9d232f40099c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
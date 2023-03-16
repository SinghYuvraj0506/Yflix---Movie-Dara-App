// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSJEcTHz6YY3UUwabWTjaiTQDfKu1o8hY",
  authDomain: "yflix--movie-display-app.firebaseapp.com",
  projectId: "yflix--movie-display-app",
  storageBucket: "yflix--movie-display-app.appspot.com",
  messagingSenderId: "554598748329",
  appId: "1:554598748329:web:178786fd275849da5919b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
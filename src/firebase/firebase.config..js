// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5b7m1SLCpv4TpgYlG1kgaDiWYmbLdK98",
  authDomain: "assignment-ten-client-ebf28.firebaseapp.com",
  projectId: "assignment-ten-client-ebf28",
  storageBucket: "assignment-ten-client-ebf28.firebasestorage.app",
  messagingSenderId: "595838859339",
  appId: "1:595838859339:web:8f1915809725e3df2df5ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

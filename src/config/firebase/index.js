// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACLsDIYzO_D6CU88d6cr9dHPMqJMs8j-0",
  authDomain: "simple-notes-d0b28.firebaseapp.com",
  projectId: "simple-notes-d0b28",
  storageBucket: "simple-notes-d0b28.appspot.com",
  messagingSenderId: "89306871028",
  appId: "1:89306871028:web:6bf7b0dfe5b0d7f42f9aa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
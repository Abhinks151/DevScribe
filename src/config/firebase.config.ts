// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs7Ru-M2MfMiee7nCnS_lOB73LeeUA8bQ",
  authDomain: "dev-scribe.firebaseapp.com",
  projectId: "dev-scribe",
  storageBucket: "dev-scribe.firebasestorage.app",
  messagingSenderId: "975759728918",
  appId: "1:975759728918:web:c4842c83fcc235dccd7037",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

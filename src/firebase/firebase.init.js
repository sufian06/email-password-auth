// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKun1e3dkbQdW8D9KCoGwK-yz2ST_bBCE",
  authDomain: "email-password-auth-a24b9.firebaseapp.com",
  projectId: "email-password-auth-a24b9",
  storageBucket: "email-password-auth-a24b9.appspot.com",
  messagingSenderId: "160519279382",
  appId: "1:160519279382:web:2af827fc470faf677ff637"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
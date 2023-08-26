/** @format */
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChyu0Rt0pOsDuCJEZD534Ld8k8ijoFoSg",
  authDomain: "signup-850ed.firebaseapp.com",
  projectId: "signup-850ed",
  storageBucket: "signup-850ed.appspot.com",
  messagingSenderId: "87566211510",
  appId: "1:87566211510:web:74caa27686918dc5188917",
  measurementId: "G-WDSPGR5STH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };

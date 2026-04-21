
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiva-a8d15.firebaseapp.com",
  projectId: "aiva-a8d15",
  storageBucket: "aiva-a8d15.firebasestorage.app",
  messagingSenderId: "786633461017",
  appId: "1:786633461017:web:7432b2d18446995d620988"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCNIXO5k0sLzfh5hD2CuNKrMiIA6Cddj0s",
    authDomain: "ema-j0hn-simple.firebaseapp.com",
    projectId: "ema-j0hn-simple",
    storageBucket: "ema-j0hn-simple.appspot.com",
    messagingSenderId: "955872928572",
    appId: "1:955872928572:web:54c377c0d4c426a886f439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
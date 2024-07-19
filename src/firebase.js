import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCvaADWLZYde-vDStjBzqlA2XX5pt2D6AQ",
    authDomain: "netflix-clone-vs.firebaseapp.com",
    projectId: "netflix-clone-vs",
    storageBucket: "netflix-clone-vs.appspot.com",
    messagingSenderId: "17510790131",
    appId: "1:17510790131:web:c26aa26ea5b6b5a8aa1886"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
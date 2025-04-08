import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBvzkF5T6wEwBopwbBoCUAG4nmMrew_C5M",
    authDomain: "financeappuek.firebaseapp.com",
    databaseURL: "https://financeappuek-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "financeappuek",
    storageBucket: "financeappuek.firebasestorage.app",
    messagingSenderId: "1090939964421",
    appId: "1:1090939964421:web:37f1c58825515301ee206c"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

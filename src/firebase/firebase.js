import { initializeApp } from "firebase/app";
// for accessing storage
import { getStorage } from "firebase/storage";

// firestore
import {getFirestore,collection} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDqh1qLe1rRaH_dO5_NzvbktrDuHqUv1BI",
  authDomain: "memehub-34623.firebaseapp.com",
  projectId: "memehub-34623",
  storageBucket: "memehub-34623.appspot.com",
  messagingSenderId: "568256977217",
  appId: "1:568256977217:web:cd8bf6068e92b5431d29c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize db
export const db = getFirestore(app)
export const memeRef = collection(db,'memes')

// storage
export const storage = getStorage(app);

// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtZhHTVezABqOptEx7qiWeoNznGz6KK10",
  authDomain: "carefinder-c6999.firebaseapp.com",
  databaseURL: "https://carefinder-c6999-default-rtdb.firebaseio.com",
  projectId: "carefinder-c6999",
  storageBucket: "carefinder-c6999.firebasestorage.app",
  messagingSenderId: "724062621457",
  appId: "1:724062621457:web:9debdef53dfa12e83346b0",
  measurementId: "G-WRYC77GNYX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import env from "react-dotenv";

console.log(env.FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: "poopbook-f9ee1.firebaseapp.com",
  projectId: "poopbook-f9ee1",
  storageBucket: "poopbook-f9ee1.appspot.com",
  messagingSenderId: "824747751792",
  appId: "1:824747751792:web:62a8d305556111799eb7b5",
  measurementId: "G-RML0VLVMJL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const authentication = getAuth(app);
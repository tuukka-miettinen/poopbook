import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
require('dotenv').config({ debug: process.env })

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "poopbook-f9ee1.firebaseapp.com",
  projectId: "poopbook-f9ee1",
  storageBucket: "poopbook-f9ee1.appspot.com",
  messagingSenderId: "824747751792",
  appId: "1:824747751792:web:62a8d305556111799eb7b5",
  measurementId: "G-RML0VLVMJL"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
"use client";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "portfolio-nextjs-54a7b.firebaseapp.com",
  projectId: "portfolio-nextjs-54a7b",
  storageBucket: "portfolio-nextjs-54a7b.firebasestorage.app",
  messagingSenderId: "61168810621",
  appId: "1:61168810621:web:33901cb2a89a1cb9fc4f14",
  measurementId: "G-C4NM8C8NFM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Analytics only in the browser and if supported
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log("Analytics initialized:", analytics);
    } else {
      console.log("Analytics is not supported in this environment.");
    }
  });
}

export { db, analytics };

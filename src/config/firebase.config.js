
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  // apiKey: "AIzaSyC-xRBlGjUtNM5i7-bP72D6KygGYEmtr2M",
  apiKey: process.env.API_KEY,
  authDomain: "portfolio-nextjs-54a7b.firebaseapp.com",
  projectId: "portfolio-nextjs-54a7b",
  storageBucket: "portfolio-nextjs-54a7b.firebasestorage.app",
  messagingSenderId: "61168810621",
  appId: "1:61168810621:web:33901cb2a89a1cb9fc4f14",
  measurementId: "G-C4NM8C8NFM"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
console.log(analytics);

export { db }
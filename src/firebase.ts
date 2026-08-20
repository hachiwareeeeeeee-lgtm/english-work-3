import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZQGKoY9fQpsey6EsTEoXFrgimC_l6ArY",
  authDomain: "ingles-proyecto-6b087.firebaseapp.com",
  projectId: "ingles-proyecto-6b087",
  storageBucket: "ingles-proyecto-6b087.firebasestorage.app",
  messagingSenderId: "1041907197572",
  appId: "1:1041907197572:web:17c7f9d8ab1351766d84d1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

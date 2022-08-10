import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALl0aE43D76uZ_PkVYTn70a9hmrAvU93o",
  authDomain: "mysupplementssj.firebaseapp.com",
  projectId: "mysupplementssj",
  storageBucket: "mysupplementssj.appspot.com",
  messagingSenderId: "856453443476",
  appId: "1:856453443476:web:c0e48c7e2f06bde066a981",
  measurementId: "G-E9XN2ET3TW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
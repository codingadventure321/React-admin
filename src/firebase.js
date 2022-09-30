import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: "admin-react-14cb2.firebaseapp.com",

  projectId: "admin-react-14cb2",

  storageBucket: "admin-react-14cb2.appspot.com",

  messagingSenderId: "1087271138366",

  appId: "1:1087271138366:web:1a502887a7efe5b8518d6f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);

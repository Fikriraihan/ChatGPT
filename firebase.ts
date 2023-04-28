import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXJbu2A0GWXgNu_TidrSOhJsgvH8_xMAg",
  authDomain: "chatgpt-messenger-14abf.firebaseapp.com",
  projectId: "chatgpt-messenger-14abf",
  storageBucket: "chatgpt-messenger-14abf.appspot.com",
  messagingSenderId: "467011813500",
  appId: "1:467011813500:web:b04729733a65c031be89f9",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bookroom16-736aa.firebaseapp.com",
  projectId: "bookroom16-736aa",
  storageBucket: "bookroom16-736aa.appspot.com",
  messagingSenderId: "459288473555",
  appId: "1:459288473555:web:a3f36fef1694bfb4064926",
  measurementId: "G-1W1TV7XERD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

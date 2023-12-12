import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}; */

const firebaseConfig = {
  apiKey: "AIzaSyD-IdHhMkiHSsNClH2he_g9UD8tlEBYYfU",
  authDomain: "chatrealtime-b6c84.firebaseapp.com",
  projectId: "chatrealtime-b6c84",
  storageBucket: "chatrealtime-b6c84.appspot.com",
  messagingSenderId: "452743780874",
  appId: "1:452743780874:web:dbf36a4ed217efd609ddf3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
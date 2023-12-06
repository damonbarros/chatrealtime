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
  apiKey: "AIzaSyA5dd4TYvyaBRP7_XrR_j_A9KPAW9sntDg",
  authDomain: "realtime-chat-c237c.firebaseapp.com",
  projectId: "realtime-chat-c237c",
  storageBucket: "realtime-chat-c237c.appspot.com",
  messagingSenderId: "262869784308",
  appId: "1:262869784308:web:45d5932dfdee980ad270a1",
  measurementId: "G-V937TPR1CH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { FIREBASE_ENV } from "../environment"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_ENV.FIREBASE_API_KEY,
  authDomain: FIREBASE_ENV.AUTH_DOMAIN,
  projectId: FIREBASE_ENV.PROJECT_ID,
  storageBucket: FIREBASE_ENV.STORAGE_BUCKET,
  messagingSenderId: FIREBASE_ENV.MESSAGING_SENDER_ID,
  appId: FIREBASE_ENV.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const appAuth = getAuth();

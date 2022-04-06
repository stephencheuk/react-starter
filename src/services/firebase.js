// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { getDatabase, ref, push, set } from "firebase/database";
import { 
  FireBase_apiKey,
  FireBase_authDomain,
  FireBase_projectId,
  FireBase_storageBucket,
  FireBase_messagingSenderId,
  FireBase_appId,
  FireBase_measurementId,
} from "../config/constant";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: FireBase_apiKey,
  authDomain: FireBase_authDomain,
  projectId: FireBase_projectId,
  storageBucket: FireBase_storageBucket,
  messagingSenderId: FireBase_messagingSenderId,
  appId: FireBase_appId,
  measurementId: FireBase_measurementId,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const dbstore = getFirestore(firebaseApp);
const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

export {
  firebaseApp,
  dbstore,
  db,
  doc,
  onSnapshot,
  ref, push, set,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  setDoc,
  auth,
};

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

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const {
  REACT_APP_FireBase_apiKey,
  REACT_APP_FireBase_authDomain,
  REACT_APP_FireBase_projectId,
  REACT_APP_FireBase_storageBucket,
  REACT_APP_FireBase_messagingSenderId,
  REACT_APP_FireBase_appId,
  REACT_APP_FireBase_measurementId,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FireBase_apiKey,
  authDomain: REACT_APP_FireBase_authDomain,
  projectId: REACT_APP_FireBase_projectId,
  storageBucket: REACT_APP_FireBase_storageBucket,
  messagingSenderId: REACT_APP_FireBase_messagingSenderId,
  appId: REACT_APP_FireBase_appId,
  measurementId: REACT_APP_FireBase_measurementId,
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

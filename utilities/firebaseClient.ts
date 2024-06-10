import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile as firebaseUpdateProfile } from 'firebase/auth';
import { getDatabase, ref, set, get, remove, onValue, push } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVU0jt3RJaYBEhLQtvfYFIo0yzBVftgX8",
  authDomain: "mystical-metanoia.firebaseapp.com",
  databaseURL: "https://mystical-metanoia-default-rtdb.firebaseio.com",
  projectId: "mystical-metanoia",
  storageBucket: "mystical-metanoia.appspot.com",
  messagingSenderId: "232582174557",
  appId: "1:232582174557:web:1fb3e790c295bd86f43ab4",
  measurementId: "G-B4VZL89LRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const jsondataRef = ref(database, 'jsondata');
const provider = new GoogleAuthProvider();


const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
 }; 

// Set persistence
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // Persistence set successfully
  })
  .catch((error) => {
    console.error('Error setting persistence:', error);
  });

// Firebase authentication functions
const createAccountWithEmailPassword = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

const signInWithEmailPassword = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);


const storeJsonData = (jsonData: any) => {
    return push(jsondataRef, jsonData);
  };

const updateProfile = (user: any, profile: { displayName?: string; photoURL?: string }) => {
    return firebaseUpdateProfile(user, profile);
  };


export {
  app,
  auth,
  signInWithGoogle,
  updateProfile,
  createAccountWithEmailPassword,
  signInWithEmailPassword,
  storeJsonData,
  browserLocalPersistence,
  setPersistence,
  database,
  remove,
  ref,
  set,
  onValue,
  get,
  push
};

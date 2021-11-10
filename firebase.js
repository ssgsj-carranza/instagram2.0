// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIAtpufgCcyGNNEawRDRrfVMfoTAggnLo",
  authDomain: "instagram-clone-e09ec.firebaseapp.com",
  projectId: "instagram-clone-e09ec",
  storageBucket: "instagram-clone-e09ec.appspot.com",
  messagingSenderId: "787447695088",
  appId: "1:787447695088:web:2773446eb4f7b06c3f6435"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC69-Z_QLh4mvVz64uYSZzk_RacEciIe3A",
    authDomain: "twitter-53e48.firebaseapp.com",
    projectId: "twitter-53e48",
    storageBucket: "twitter-53e48.appspot.com",
    messagingSenderId: "248375274857",
    appId: "1:248375274857:web:5587918998de9872e2e1f8",
    measurementId: "G-VSEHL1SQSY"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
export {auth ,db}
import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB-WibPBGn7y5xhUsZXS6poruxV04TsDpA",
    authDomain: "pabloplayground-ea247.firebaseapp.com",
    databaseURL: "https://pabloplayground-ea247.firebaseio.com",
    projectId: "pabloplayground-ea247",
    storageBucket: "pabloplayground-ea247.appspot.com",
    messagingSenderId: "562794160529",
    appId: "1:562794160529:web:a680d28c166de678563a30",
    measurementId: "G-F2X4R1FNPW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()
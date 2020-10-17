import firebase from 'firebase/app'
import 'firebase/firestore'

***
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()

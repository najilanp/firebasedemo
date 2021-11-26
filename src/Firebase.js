import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD-ReNZ4vH3mxljZHWhfy30wcsotdBWgB4",
    authDomain: "fir-c980e.firebaseapp.com",
    projectId: "fir-c980e",
    storageBucket: "fir-c980e.appspot.com",
    messagingSenderId: "337451607003",
    appId: "1:337451607003:web:91fe27b6c0db39fced3dfe"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;
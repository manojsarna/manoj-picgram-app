import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCdaIbP9epJ7JJxL2-hs6pKk1uZWbp96bs",
  authDomain: "manoj-mygram.firebaseapp.com",
  projectId: "manoj-mygram",
  storageBucket: "manoj-mygram.appspot.com",
  messagingSenderId: "779532947",
  appId: "1:779532947:web:7bb8b556526d9c29b2eb66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
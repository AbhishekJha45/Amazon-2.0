import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBdfRkrd78ik-WWlZ6pYB-loutFYYNTU_I",
    authDomain: "amaz-2-ce1f6.firebaseapp.com",
    projectId: "amaz-2-ce1f6",
    storageBucket: "amaz-2-ce1f6.appspot.com",
    messagingSenderId: "679500609149",
    appId: "1:679500609149:web:0d83d38957aad748736314"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore();

  export default db;

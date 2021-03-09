import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCpBodxgjBpcoRXB4OXz1df5NJc6McIRQw",
  authDomain: "skillzta-46012.firebaseapp.com",
  databaseURL: "https://skillzta-46012-default-rtdb.firebaseio.com",
  projectId: "skillzta-46012",
  storageBucket: "skillzta-46012.appspot.com",
  messagingSenderId: "402988858172",
  appId: "1:402988858172:web:cd8575754bd838644cfc39",
  measurementId: "G-JEQZ7SKE1X"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };

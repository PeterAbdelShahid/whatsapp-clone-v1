import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIxMk1Qc_mPlkCo23kXcB_zHHl-5maD0w",
  authDomain: "whatsapp-2-77509.firebaseapp.com",
  projectId: "whatsapp-2-77509",
  storageBucket: "whatsapp-2-77509.appspot.com",
  messagingSenderId: "379380112418",
  appId: "1:379380112418:web:ee47f34744c6c76fc37e7b",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDHrT_XvxdID3e7UP0EeHPHVB2ulWHs42M",
  authDomain: "tok-tok---jornada.firebaseapp.com",
  projectId: "tok-tok---jornada",
  storageBucket: "tok-tok---jornada.appspot.com",
  messagingSenderId: "1026781083771",
  appId: "1:1026781083771:web:d53d592db80bfeda52cade"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
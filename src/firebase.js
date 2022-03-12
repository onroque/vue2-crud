import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZx81VRkaCyTQ1B5s1Jk6JGtGFzeF6_dM",
    authDomain: "crud-1-bb60c.firebaseapp.com",
    projectId: "crud-1-bb60c",
    storageBucket: "crud-1-bb60c.appspot.com",
    messagingSenderId: "1064211552132",
    appId: "1:1064211552132:web:e6149056d7e34ce51b6fd1"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();    //Inicialización de la base de datos

export {db};

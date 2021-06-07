import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAclTbbb1wLrwejxerMgXA-suEqkCvVie4",
  authDomain: "youcan-2358e.firebaseapp.com",
  projectId: "youcan-2358e",
  storageBucket: "youcan-2358e.appspot.com",
  messagingSenderId: "984739924695",
  appId: "1:984739924695:web:fc5be8a3523f1fd034fe92",
  measurementId: "G-QRX77M7R0D",
};
firebase.initializeApp(firebaseConfig);

exports.firebase = firebase;

export const auth = firebase.auth();
export const firestore = firebase.firestore();

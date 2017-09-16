import firebase from 'firebase';
import firebaseui from 'firebaseui';

export const config = {
  apiKey: 'AIzaSyAzp-QFMeykBNRpgooCRySsDjWU0VlBc5A',
  authDomain: 'hackthenorth-9d53b.firebaseapp.com',
  databaseURL: 'https://hackthenorth-9d53b.firebaseio.com',
  projectId: 'hackthenorth-9d53b',
  storageBucket: 'hackthenorth-9d53b.appspot.com',
  messagingSenderId: '206195110121'
};

export const uiConfig = {
  signInSuccessUrl: 'localhost:3000',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};

const AUTH_KEY = "AUTH_KEY";

export const firebaseApp = firebase.initializeApp(config);

export const db = firebase.database();

export const auth = firebase.auth();

export const ui = new firebaseui.auth.AuthUI(auth);

import firebase from 'firebase';
import firebaseui from 'firebaseui';

// export const config = {
//   apiKey: 'AIzaSyAzp-QFMeykBNRpgooCRySsDjWU0VlBc5A',
//   authDomain: 'hackthenorth-9d53b.firebaseapp.com',
//   databaseURL: 'https://hackthenorth-9d53b.firebaseio.com',
//   projectId: 'hackthenorth-9d53b',
//   storageBucket: 'hackthenorth-9d53b.appspot.com',
//   messagingSenderId: '206195110121'
// };

export const config = {
  apiKey: 'AIzaSyAD4dMHTRXgLn47qb9Eukmry5uGmH4p0gY',
  authDomain: 'logme-c2dd7.firebaseapp.com',
  databaseURL: 'https://logme-c2dd7.firebaseio.com',
  projectId: 'logme-c2dd7',
  storageBucket: '',
  messagingSenderId: '1026433679797'
};

export const uiConfig = {
  signInSuccessUrl: 'localhost:3000',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.me'
      ]
    },
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ]
};

const AUTH_KEY = 'AUTH_KEY';

export const firebaseApp = firebase.initializeApp(config);

export const db = firebase.database();

export const auth = firebase.auth();

export const ui = new firebaseui.auth.AuthUI(auth);

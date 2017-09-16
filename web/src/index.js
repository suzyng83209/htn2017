import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function submitClick() {

  var firebaseRef = firebase.database().ref();
  //Gets rating based off Emoji chosen
  var rating = 79;
  //Use day of week library
  var dayOfWeek = moment().day();

  var tmp = firebaseRef.child("Total");

  //Sets day of the week to rating chosen
  firebaseRef.child(dayOfWeek).set(rating);
  firebaseRef.child("Total").set(tmp + rating.toString());
}

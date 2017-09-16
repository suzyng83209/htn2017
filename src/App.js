import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import moment from 'moment';
import './App.css';
import { db } from './firebase';
import Typewriter from './components/Typewriter';

const submitClick = () => {
  const rating = 79;
  const today = moment().format('dddd');
  var temp;

  db
    .ref()
    .child(today)
    .set(rating);

  db
    .ref()
    .child('Total')
    .once('value')
    .then(({ node_ }) => {
      db
        .ref()
        .child('Total')
        .set(node_.value_ + rating.toString());
    });
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typewriter phrase="Log(me)." time={200} />
        <button onClick={submitClick}>Update Firebase</button>
      </div>
    );
  }
}

export default App;

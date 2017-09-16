import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import moment from 'moment';
import './App.css';
import { db, ui, uiConfig } from './firebase';

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
  componentDidMount = () => {
    ui.start('#firebaseui-auth', uiConfig);
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="firebaseui-auth" />
        <button onClick={submitClick}>Update Firebase</button>
      </div>
    );
  }
}

export default App;

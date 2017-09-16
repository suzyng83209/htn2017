import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import JournalForm from './containers/JournalForm';
import Home from './containers/Home';
import logo from './logo.svg';
import moment from 'moment';
import './App.css';
import { db } from './firebase';

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

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/daily" component={JournalForm} />
  </Route>
);

{/* <Router history={hashHistory}>
  {routes}
</Router> */}

class App extends Component {
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
        <button onClick={submitClick}>Update Firebase</button>
      </div>
    );
  }
}

export default App;

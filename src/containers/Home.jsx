import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { db } from '../firebase';
import moment from 'moment';
import Typewriter from '../components/Typewriter';
import Test from '../test';

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

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <h2>Welcome to Our App</h2>
        </div>
        <p className="Home-intro">
          This is temporary text, this will eventually be the home page.
        </p>
        <div className="App">
         <Typewriter phrase="Log(me)." time={200} />
         <button onClick={submitClick}>Update Firebase</button>
         <Test />
        </div>
      </div>
    );
  }
}

export default Home;

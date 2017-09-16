import React from 'react';
import { db } from './firebase';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodStr: '',
      test: ''
    };
  }

  checkMood = () => {
    for (var i = 0, len = this.state.moodStr.length; i < len; i++) {
      var store = this.state.moodStr.split('');
      var frequency = {}; // array of frequency.
      var max = 0; // holds the max frequency.
      var result; // holds the max frequency element.
      for (var v in store) {
        frequency[store[v]] = (frequency[store[v]] || 0) + 1; // increment frequency.
        if (frequency[store[v]] > max) {
          // is this frequency > max so far ?
          max = frequency[store[v]]; // update max.
          result = store[v]; // update result.
        }
      }
    }
    console.log(result);
  };

  logClick = () => {
    new Promise(resolve => {
      db
        .ref()
        .child('Total')
        .once('value')
        .then(snapshot => {
          this.setState({
            moodStr: snapshot.node_.value_
          });
          console.log(snapshot.node_.value_);
          this.checkMood();
        });
    });
  };

  render = () => {
    return (
      <div>
        {' '}
        <button onClick={this.logClick}> click me to log str </button>
      </div>
    );
  };
}

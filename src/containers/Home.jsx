import React, { Component } from 'react';
import '../App.css';
import { db } from '../firebase';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import Typewriter from '../components/Typewriter';

// const submitClick = () => {
//   const rating = 79;
//   const today = moment().format('dddd');
//   var temp;

//   db
//     .ref()
//     .child(today)
//     .set(rating);

//   db
//     .ref()
//     .child('Total')
//     .once('value')
//     .then(({ node_ }) => {
//       db
//         .ref()
//         .child('Total')
//         .set(node_.value_ + rating.toString());
//     });
// };

class Home extends Component {
  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.props.history.push('/daily');
    }
  };

  componentDidMount = () => {
    setTimeout(
      () => window.addEventListener('keydown', this.handleKeyDown),
      2000
    );
  };

  componentWillUnmount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  render() {
    return (
      <div className="App">
        <Typewriter phrase="Log(me);" time={300} delay={500} />
        {/* <button onClick={submitClick}>Update Firebase</button>
          <Test /> */}
      </div>
    );
  }
}

export default withRouter(Home);

Home.propTypes = {
  history: React.PropTypes.object
};

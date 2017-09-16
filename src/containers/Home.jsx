import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

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
      </div>
    );
  }
}

export default Home;

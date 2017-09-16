import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import JournalForm from './containers/JournalForm';
import Home from './containers/Home';
import logo from './logo.svg';
import './App.css';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/daily" component={JournalForm} />
  </Route>
);

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        {routes}
      </Router>
    );
  }
}

export default App;

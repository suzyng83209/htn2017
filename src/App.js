import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import JournalForm from './containers/JournalForm';
import Home from './containers/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/daily" component={JournalForm} />
      </Switch>
    );
  }
}

export default App;

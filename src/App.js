import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JournalForm from './containers/JournalForm';
import Home from './containers/Home';
import Input from './components/Input';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/daily" component={JournalForm} />
          <Route path="/input" component={Input} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;

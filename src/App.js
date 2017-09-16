import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HorizontalStepper from './containers/HorizontalStepper';
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Header from './components/Header.jsx';
import Test from './test';
import Input from './components/Input';
import MoodChart from './containers/MoodChart';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header/>
          <div style={{ margin: '80px 20px 20px 15px' }} onClick={this.onOverlayClick}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/daily" component={HorizontalStepper} />
              <Route path="/input" component={Input} />
              <Route path="/chart" component={MoodChart} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/test" component={Test} />
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

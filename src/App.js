import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HorizontalStepper from './containers/HorizontalStepper';
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Header from './components/Header.jsx';
import Test from './test';
import Input from './components/Input';
import MoodChart from './containers/MoodChart';
import { auth } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentWillMount = () => {
    auth.onAuthStateChanged(user => {
      this.setState({ user: (user || {}).providerData });
    });
  };

  checkAuth = TargetPage =>
    !this.state.user || !this.state.user.length ? (
      <Redirect to="/login" />
    ) : (
      <TargetPage />
    );

  checkAnon = AuthPage =>
    this.state.user && this.state.user.length ? (
      <Redirect to="/daily" />
    ) : (
      <AuthPage />
    );

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <div
            style={{ margin: '80px 20px 20px 15px' }}
            onClick={this.onOverlayClick}
          >
            <Switch>
              <Route exact path="/" render={() => this.checkAuth(Home)} />
              <Route
                path="/daily"
                render={() => this.checkAuth(HorizontalStepper)}
              />
              <Route path="/chart" render={() => this.checkAuth(MoodChart)} />
              <Route path="/login" render={() => this.checkAnon(Login)} />
              <Route path="/signup" render={() => this.checkAnon(SignUp)} />
              <Route path="/test" component={Test} />
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);

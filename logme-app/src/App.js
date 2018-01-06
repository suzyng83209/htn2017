import React, { Component } from 'react';
import styled from 'styled-components';
import { auth } from './firebase';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HorizontalStepper from './containers/HorizontalStepper';
import Authenticate from './containers/Authenticate';
import Analytics from './containers/Analytics';
import Header from './components/Header';
import Home from './containers/Home';
import Chat from './containers/Chat';
import './App.css';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
      <TargetPage user={this.state.user} />
    );

  checkAnon = isLogin =>
    this.state.user && this.state.user.length ? (
      <Redirect to="/daily" />
    ) : (
      <Authenticate isLogin={isLogin} />
    );

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Container onClick={this.onOverlayClick}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/daily"
                render={() => this.checkAuth(HorizontalStepper)}
              />
              <Route path="/chart" render={() => this.checkAuth(Analytics)} />
              <Route path="/login" render={() => this.checkAnon(true)} />
              <Route path="/signup" render={() => this.checkAnon()} />
            </Switch>
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);

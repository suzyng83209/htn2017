import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ui, uiConfig, auth } from '../firebase';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount = () => {
    ui.start('#firebaseui-auth', uiConfig);
  };

  componentWillUnmount = () => {
    ui.reset();
  };

  handleLogin = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => console.log('done logging in'))
      .catch(error => {
        console.log(error.code, error.message);
      });
  };

  handleSignUp = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => console.log('done signing up'))
      .catch(error => {
        console.log(error.code, error.message);
      });
  };

  render() {
    const { isLogin } = this.props;
    return (
      <div style={{ margin: 'auto', width: '100%' }}>
        <div style={{ margin: 'auto', width: '50%' }}>
          <div id="firebaseui-auth" />
          <TextField
            style={{ margin: 'auto', width: '100%' }}
            hintText="Enter your email"
            floatingLabelText="Email"
            onChange={(event, newValue) => this.setState({ email: newValue })}
          />
          <br />
          <TextField
            style={{ margin: 'auto', width: '100%' }}
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) =>
              this.setState({ password: newValue })}
          />
          <br />
          <RaisedButton
            label={isLogin ? 'Login' : 'Sign Up'}
            primary={true}
            style={{ marginTop: '15px' }}
            onClick={isLogin ? this.handleLogin : this.handleSignUp}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Authenticate);

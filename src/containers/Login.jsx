import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
   }

  handleLoginClick = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div style={{margin: 'auto', width: '100%'}}>
        <div style={{margin: 'auto', width: '50%'}}>
           <TextField
             style={{margin: 'auto', width: '100%'}}
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event, newValue) => this.setState({ username: newValue })}
           />
           <br/>
           <TextField
             style={{margin: 'auto', width: '100%'}}
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event, newValue) => this.setState({ password: newValue })}
           />
           <br/>
           <RaisedButton label="Login" primary={true} style={{marginTop: '15px'}} onClick={(event) => this.handleLoginClick(event)}/>
         </div>
      </div>
    );
  }
}

export default Login;

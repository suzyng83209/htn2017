import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSignUpClick = (event) => {
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
           hintText="Enter your Email"
           type="email"
           floatingLabelText="Email"
           onChange = {(event, newValue) => this.setState({ email: newValue })}
         />
         <br/>
         <TextField
           style={{margin: 'auto', width: '100%'}}
           type = "password"
           hintText="Enter your Password"
           floatingLabelText="Password"
           onChange = {(event, newValue) => this.setState({ password: newValue })}
         />
         <br/>
         <RaisedButton
           label="Sign Up"
           primary={true}
           style={{marginTop: '15px'}}
           onClick={(event) => this.handleSignUpClick(event)}
         />
        </div>
      </div>
    );
  }
}

export default SignUp;

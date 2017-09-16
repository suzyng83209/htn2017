import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class JournalText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }

  render() {
    return (
       <TextField
         style={{margin: 'auto', width: '100%'}}
         hintText="Enter how you are doing"
         floatingLabelText="Journal"
         multiLine={true}
         rows={2}
         onChange = {(event, newValue) => this.setState({ name: newValue }) }
       />
    );
  }
}

export default JournalText;

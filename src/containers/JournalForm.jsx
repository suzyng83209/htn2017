import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class JournalForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleSubmitClick(event) {
    event.preventDefault();
    console.log('submit click')
  }

  render() {
    return (
      <div style={{margin: 'auto', width: '100%'}}>
        <div style={{margin: 'auto', width: '50%'}}>
           <TextField
             style={{margin: 'auto', width: '100%'}}
             hintText="Enter how you are doing"
             floatingLabelText="Journal"
             multiLine={true}
             rows={2}
             onChange = {(event, newValue) => this.setState({ name: newValue }) }
           />
           <br/>
           <RaisedButton
             label="Next"
             primary={true}
             style={{marginTop: '15px'}}
             onClick={(event) => this.handleSubmitClick(event)}
           />
         </div>
      </div>
    );
  }
}

export default JournalForm;

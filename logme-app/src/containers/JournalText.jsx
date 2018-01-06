import React from 'react';
import TextField from 'material-ui/TextField';

export default ({ handleChange }) => (
  <TextField
    style={{ margin: 'auto', width: '100%' }}
    hintText="Tell us why you are feeling that way"
    floatingLabelText="Journal"
    multiLine={true}
    rows={2}
    onChange={handleChange}
  />
);

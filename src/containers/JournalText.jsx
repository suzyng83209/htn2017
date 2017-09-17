import React from 'react';
import TextField from 'material-ui/TextField';

export default ({ handleChange }) => (
  <TextField
    style={{ margin: 'auto', width: '100%' }}
    hintText="Enter how you are doing"
    floatingLabelText="Journal"
    multiLine={true}
    rows={2}
    onChange={handleChange}
  />
);

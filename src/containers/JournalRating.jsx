import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import Neutral from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const JournalRating = () => (
  <div>
    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
      <RadioButton
        value="happy"
        label="Happy"
        checkedIcon={<ThumbUp />}
        style={styles.radioButton}
      />
      <RadioButton
        value="neutral"
        label="Neutral"
        checkedIcon={<Neutral />}
        style={styles.radioButton}
      />
      <RadioButton
        value="sad"
        label="Sad"
        checkedIcon={<ThumbUp />}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default JournalRating;

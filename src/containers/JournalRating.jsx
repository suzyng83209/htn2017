import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import VerySad from 'material-ui/svg-icons/social/mood-bad';
import Sad from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Neutral from 'material-ui/svg-icons/social/sentiment-neutral';
import Happy from 'material-ui/svg-icons/social/sentiment-satisfied';
import VeryHappy from 'material-ui/svg-icons/social/sentiment-very-satisfied';

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

const JournalRating = ({ handleChange }) => (
  <div>
    <RadioButtonGroup
      name="shipSpeed"
      defaultSelected="not_light"
      onChange={handleChange}
    >
      <RadioButton
        value={4}
        label="Very Happy"
        checkedIcon={<VeryHappy />}
        style={styles.radioButton}
      />
      <RadioButton
        value={3}
        label="Happy"
        checkedIcon={<Happy />}
        style={styles.radioButton}
      />
      <RadioButton
        value={2}
        label="Neutral"
        checkedIcon={<Neutral />}
        style={styles.radioButton}
      />
      <RadioButton
        value={1}
        label="Sad"
        checkedIcon={<Sad />}
        style={styles.radioButton}
      />
      <RadioButton
        value={0}
        label="Very sad"
        checkedIcon={<VerySad />}
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default JournalRating;

import React from 'react';
import moment from 'moment';
import Typewriter from '../components/Typewriter';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { withRouter } from 'react-router-dom';
import JournalRating from './JournalRating';
import JournalText from './JournalText';
import { db } from '../firebase';

const Input = props => (
  <div>
    {React.Children.map(
      props.children,
      (child, index) => index === props.step && React.cloneElement(child)
    )}
  </div>
);

class HorizontalStepper extends React.Component {
  state = {
    finished: false,
    stepIndex: 0,
    rating: null,
    text: ''
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 1
    });
  };

  handleFinish = () => {
    const today = moment().format('dddd');
    db
      .ref()
      .child(today)
      .set({
        rating: this.state.rating,
        comments: this.state.text
      });

    this.props.history.push('/chart');
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  handleRatingChange = (e, value) => {
    this.setState({ rating: value });
  };

  handleTextChange = (e, value) => {
    this.setState({ text: value });
  };

  render() {
    const { stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };

    return (
      <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
        <Typewriter
          phrase={'How are you feeling today?'}
          fontSize="2em"
          time={100}
          delay={0}
          substr=""
          sustained={stepIndex < 1}
        />
        {stepIndex ? (
          <Typewriter
            phrase={'Tell me more about it.'}
            fontSize="2em"
            time={100}
            delay={0}
            substr=""
            sustained
          />
        ) : null}
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Select current mood</StepLabel>
          </Step>
          <Step>
            <StepLabel>Tell us more about your mood</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <div>
            <Input step={stepIndex}>
              <JournalRating handleChange={this.handleRatingChange} />
              <JournalText handleChange={this.handleTextChange} />
            </Input>
          </div>
        </div>
        <div style={{ margin: '48px 0' }}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{ marginRight: 12 }}
          />
          <RaisedButton
            label={stepIndex === 1 ? 'Finish' : 'Next'}
            primary={true}
            onTouchTap={stepIndex === 1 ? this.handleFinish : this.handleNext}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(HorizontalStepper);

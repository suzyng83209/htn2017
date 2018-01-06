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
import axios from 'axios';

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

  getWeather = () => {
    var key =
      'http://api.openweathermap.org/data/2.5/weather?q=Waterloo&APPID=002768ee775ba2d1d80d3508fb8a5bc0';
    return axios
      .get(key)
      .then(json => {
        return json.data.weather[0].description;
      })
      .catch(err => {
        return err;
      });
  };

  runSentimentAnalysis = () => {
    return fetch(
      'https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'ocp-apim-subscription-key': '82eaf8d7aaf141e7b51d448766e4325a'
        },
        body: JSON.stringify({
          documents: [
            {
              language: 'en',
              id: 'string',
              text: this.state.text
            }
          ]
        })
      }
    )
      .then(response => {
        console.log('response', response);
        return response.json();
      })
      .then(data => {
        console.log('data', data);
        
        return data.documents[0].score;
      })
      .catch(error => {
        return 0;
        console.log(error);
      });
  };

  handleFinish = () => {
    const weather = new Promise(resolve => resolve(this.getWeather()));
    const sentiment = new Promise(resolve =>
      resolve(this.runSentimentAnalysis())
    );
    const today = moment().format('dddd');
    const userId = this.props.user[0].uid;

    return Promise.all([weather, sentiment])
      .then(results => {
        console.log('results', results);        
        db
          .ref('/user/' + userId)
          .child(today)
          .update({ // TODO Change this!!!!
            rating: this.state.rating,
            comments: this.state.text,
            weather: results[0] || "",
            sentiment: results[1] || 0,
          });
      })
      .then(() => {
        this.props.history.push('/chart');
      });
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

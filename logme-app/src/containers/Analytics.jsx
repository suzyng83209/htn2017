import React from 'react';
import styled from 'styled-components';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MoodChart from './MoodChart';
import SentimentChart from './SentimentChart';
import WeatherSentimentChart from './WeatherSentimentChart';

const Container = styled.div`
  display: flex;
  margin-top: 10%;
`;

class Analytics extends React.Component {
  state = {
    showAdvisory: false
  };

  componentDidMount = () => {
    setTimeout(() => this.showAdvisory(), 2000);
  };
  hideAdvisory = () => {
    this.setState({ showAdvisory: false });
  };
  showAdvisory = () => {
    this.setState({ showAdvisory: true });
  };
  actions = [
    <FlatButton label="No Thanks" onClick={this.hideAdvisory} />,
    <FlatButton label="I Would" primary={true} onClick={this.handleClose} />
  ];
  render = () => (
    <Container>
      <Dialog
        title={`Hey ${this.props.user[0].displayName}`}
        actions={this.actions}
        modal={true}
        open={this.state.showAdvisory}
      >
        We've noticed that you seem to be feeling down in the last
		couple of days and we're a little concerned. <br /><br />
        Would you like to talk to someone?
      </Dialog>
      <label>
        Moods of the Week
        <MoodChart />
      </label>
      <label>
        Words of the Week
        <SentimentChart />
      </label>
      <label>
        Weather of the Week
        <WeatherSentimentChart />
      </label>
    </Container>
  );
}

export default Analytics;

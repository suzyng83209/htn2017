import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { db } from '../firebase';
import {
  VictoryLine,
  VictoryScatter,
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme
} from 'victory';
import VerySad from 'material-ui/svg-icons/social/mood-bad';
import Sad from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Neutral from 'material-ui/svg-icons/social/sentiment-neutral';
import Happy from 'material-ui/svg-icons/social/sentiment-satisfied';
import VeryHappy from 'material-ui/svg-icons/social/sentiment-very-satisfied';

const data = [
  { day: 1, mood: 1 },
  { day: 2, mood: 3 },
  { day: 3, mood: 2 },
  { day: 4, mood: 1 },
  { day: 5, mood: 1 },
  { day: 6, mood: 1 },
  { day: 7, mood: 1 }
];

const fakeData = {
	Sunday: {
		mood: 0,
		score: 0.5,
		weather: 'rain',
	},
	Monday: {
		mood: 1,
		score: 0.7,
		weather: 'sun',
	}
}
// MoodTable data={fakeData}/>
class MoodChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  // componentDidMount = () => {
  //   db
  //     .ref('/user/' + this.props.user[0].uid)
  //     .once('value')
  //     .then(res => {
  //       console.log('snadsfasd', res.node_.children_.root_);
  //       const ratingDataSundary = { day: res.node_.children_.root_.key, mood: 0};
  //       this.setState({ data: res.node_.children_.root_ });
  //     });
  // };

  render() {
    return (
      <g transform={'translate(500, 0)'}>
        <VictoryChart
          //theme={VictoryTheme.material}
          domainPadding={{ x: 40, y: 40 }}
          style={{ width: '50%' }}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7]}
            tickFormat={['S', 'M', 'T', 'W', 'Th', 'F', 'S']}
          />
          <VictoryAxis
            dependentAxis
            tickValues={[0, 1, 2, 3, 4]}
            tickFormat={['Very Sad', 'Sad', 'Neutral', 'Happy', 'Very Happy']}
          />
          <VictoryLine
            data={data}
            width={2100}
            colorScale={'warm'}
            x="day"
            y="mood"
          />
        </VictoryChart>
      </g>
    );
  }
}
export default MoodChart;

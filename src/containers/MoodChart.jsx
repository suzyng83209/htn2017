import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const data = [
  {day: 1, mood: 2},
  {day: 2, mood: 1},
  {day: 3, mood: 1},
  {day: 4, mood: 0},
  {day: 5, mood: 0},
  {day: 6, mood: 2},
  {day: 7, mood: 1}
];

class MoodChart extends React.Component {
  render() {
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7]}
          tickFormat={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x}`)}
        />
        <VictoryBar
          data={data}
          colorScale={"warm"}
          x="day"
          y="mood"
        />
      </VictoryChart>
    )
  }
}

export default MoodChart;

import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { VictoryLine, VictoryScatter, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

class MoodChart extends React.Component {
  render() {
	return (
    <g transform={"translate(400, 0)"}>
      <VictoryChart width={1000}>
        <VictoryAxis/>
        <VictoryAxis dependentAxis/>
        <VictoryLine
          style={{ data: { stroke: "orange" }}}
          y={(data) => Math.sin(2 * Math.PI * data.x)}
        />
        <VictoryScatter
          y={(data) => Math.sin(2 * Math.PI * data.x)}
          samples={25}
          size={5}
          style={{ data: { fill: "tomato" }}}
        />
       </VictoryChart>
      </g>
    )
  }
}
export default MoodChart;

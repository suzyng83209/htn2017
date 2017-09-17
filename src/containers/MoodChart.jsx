import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { VictoryLine, VictoryScatter, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const data = [
	{day: 1, mood: 1},
	{day: 2, mood: 3},
	{day: 3, mood: 2},
	{day: 4, mood: 1},
	{day: 5, mood: 1},
	{day: 6, mood: 4},
	{day: 7, mood: 4}
]

class MoodChart extends React.Component {
  render() {
	return (
    <g transform={"translate(500, 0)"}>
    <VictoryChart
         //theme={VictoryTheme.material}
         domainPadding={30}
       >
         <VictoryAxis
           tickValues={[1, 2, 3, 4,5, 6, 7]}
           tickFormat={["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
         />
         <VictoryAxis
           dependentAxis
		   tickValues={[0,1,2,3,4]}
           tickFormat={["0","1","2","3","4"]}
         />
         <VictoryLine
           data={data}
		   width = {2100}
           colorScale={"warm"}
           x="day"
           y="mood"
         />
       </VictoryChart>
	</g>
    )
  }
}
export default MoodChart;

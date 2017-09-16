import React from 'react';
import { db } from './firebase';

export default class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			moodStr: ''
		}
	}

	logClick = () => {
		new Promise(resolve => {
			db.ref().child('Total').once('value').then(snapshot => {
				console.log(snapshot.node_.value_);
			})
		})
	}

	render = () => {
		return (<div><button onClick={this.logClick}>click me to log str</button></div>)
	}
}
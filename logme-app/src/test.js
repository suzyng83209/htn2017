import React from 'react';
import { db } from './firebase';
import ReactDOM from 'react-dom';
import { OpenWeatherMap } from 'react-weather';
import axios from 'axios';

function stringToAscii(s) {
  var ascii="";
  if(s.length>0)
    for(var i=0; i < s.length; i++)
    {
      var c = ""+s.charCodeAt(i);
      while(c.length < 3)
       c = "0"+c;
      ascii += c;
    }
  return(ascii);
}

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodStr: '0123456789',
      test: ''
    };
  }

  textAnalysis = (txt) => {
    return fetch('https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment', {
      method: 'POST',
      headers: {
       'content-type': 'application/json',
       'ocp-apim-subscription-key': '82eaf8d7aaf141e7b51d448766e4325a',
      },
      body: {
        "documents": [
          {
            "language": "en",
            "id": "string",
            "text": txt,
          }
        ]
      },
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.documents[0].score);
      return data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // moodStr is a string of numbers, of all recorded moods
  checkMood = () => {
    var store = this.state.moodStr.split('').slice(-30);
    var frequency = {}; // array of frequency.
    var max = 0; // holds the max frequency.
    var result; // holds the max frequency element.
    for (var v in store) {
      frequency[store[v]] = (frequency[store[v]] || 0) + 1; // increment frequency.
      if (frequency[store[v]] > max) {
        // is this frequency > max so far ?
        max = frequency[store[v]]; // update max.
        result = store[v]; // update result.
      }
    }
    console.log(result);
  };

  // logClick = () => {
  //   new Promise(resolve => {
  //     db
  //       .ref()
  //       .child('Total')
  //       .once('value')
  //       .then(snapshot => {
  //         this.setState({
  //           moodStr: snapshot.node_.value_
  //         });
  //         console.log(snapshot.node_.value_);
  //         this.checkMood();
  //       });
  //   });
  // };
  //
  // setWeather = (weather) => {
  //   db.ref().child('Weather').set(weather);
  // }

	getWeather = () => {
		var key = "http://api.openweathermap.org/data/2.5/weather?q=Waterloo&APPID=002768ee775ba2d1d80d3508fb8a5bc0";
		return axios.get(key)
		.then((json) => {
			const weather = json.data.weather[0].description;
      return this.setWeather(weather);
    }).catch((err) => {
			return err;
		})
	}

  render = () => {
    return (
      <div style={{height:"100vh", marginTop:"50%"}}>
        {' '}
        <button onClick={() => this.textAnalysis('hi')}> click me to log str </button>
      </div>
    );
  };
}

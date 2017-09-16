import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// https://github.com/callemall/material-ui/issues/4670
// Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

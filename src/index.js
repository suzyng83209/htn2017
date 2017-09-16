import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { BrowserRouter } from 'react-router-dom'
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

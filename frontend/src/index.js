import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

axios.defaults.baseURL = process.env.REACT_APP_endpoint || 'http://localhost:3001/api';

console.log('process.env.REACT_APP_endpoint :', process.env.REACT_APP_endpoint);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

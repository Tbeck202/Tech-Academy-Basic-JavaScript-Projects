import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let model = {clicks: 0};

ReactDom.render(<App clicks = {model.clicks}/>, document.getElementById('root'));
serviceWorker.unregister();
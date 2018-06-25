import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
// import Login from './components/LoginPage/login.js';//??????

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

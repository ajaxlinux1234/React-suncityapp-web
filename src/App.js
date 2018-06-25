import React, { Component } from 'react';
import './App.css';

import Login from './webview/LoginPage/login';//登录页面引入


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;

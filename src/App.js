import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'

import Login from './webview/LoginPage/login';//登录页面引入
import Home from './webview/HomePage/home';//登录页面引入

const history = createBrowserHistory()

class App extends Component {
  render() {
    // console.log(history)
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Login} history={history}/>
            <Route path="/home" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

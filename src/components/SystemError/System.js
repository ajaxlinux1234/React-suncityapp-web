import React, { Component } from 'react';
import './System.css';


class System extends Component {
  render() {
    return (
      <div className="System">
        <img src={require('../../assets/images/icn-error-cross-red.png')} alt="" className="SystemImg"/>
        <p className="SystemError">系統發生錯誤，不能登入，請刷新並重新嘗試或聯絡 IT 24小時服務熱線 8891 1234</p>
        <button className="SystemEsc">返回登入介面</button>
      </div>
    );
  }
}

export default System;
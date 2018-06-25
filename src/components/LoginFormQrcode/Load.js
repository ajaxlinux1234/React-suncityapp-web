import React, { Component } from 'react';
import './Load.css';

class Load extends Component {
    render() {
      return (
        <div className="Load">
          <img src={require('../../assets/images/icn-loading.png')} alt="" className="loadImg"/>
          <p className="later">登入中，請稍後。</p>
        </div>
      );
    }
  }
  
  export default Load;
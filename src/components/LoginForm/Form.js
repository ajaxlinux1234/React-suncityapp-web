import React, { Component } from 'react';
import { render } from 'react-dom';
import './Form.css';

class Form extends Component {

  state = {//设置初始状态
    phoneHidden: false,
    chcekTitle :false,
  };
  //划入滑出 忘记密码
  onMouseEnter = () => {//鼠标移入（不支持事件冒泡）
    this.setState({ phoneHidden: true });
  };
  onMouseLeave = () => {//鼠标移除（不支持事件冒泡）
     this.setState({ phoneHidden: false });
  };

  //划入滑出 登录状态
  onMouseEnterTitle = () => {//鼠标移入（不支持事件冒泡）
    this.setState({ chcekTitle: true });
  };
  onMouseLeaveTitle = () => {//鼠标移除（不支持事件冒泡）
     this.setState({ chcekTitle: false });
  };
  submit = () => {
    this.props.history.push('/home');
  }

  render() {
    return (
       <div className="formBox clear" style={{display:"block"}}>
          {/* form表单 */}
          <div className="formBox clear" style={{display:"block"}}>
            <form action="#" method="" id="form" className="fl">
              <input type="text" placeholder="用戶名稱或電郵地址" id="username"/>
              <input type="password" placeholder="密码" id="password"/>
              <div className="phoneBox">
                <p className="phone" style={{ display: this.state.phoneHidden ? 'block' : 'none' }}>請致電 8891 1234 聯絡IT 24 小時熱線協助重設密碼</p>
                <p className="forgetPass">
                  <a href="javascript:;" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>忘记密码</a>
                </p>
              </div>
              <div className="submitBox">
                <input type="submit" id="sub" value="登录" onClick={this.submit}/>
                <i className="login-arrow"></i>
              </div>
            </form>
            <div className="fr QRcodeBox">
              {/* 二维码框 */}
              <div className="QRcode">
                {/* <img src={require('../../assets/images/qrcode.jpg')} alt="" className="QRcodeImg"/> */}
              </div>
              <div className="status">
                <p className="chcekTitle" style={{ display: this.state.chcekTitle ? 'block' : 'none' }}>若取消選取此選項，SunPeople 網頁版將於數分鐘休止狀態後自動登出。</p>
                <label htmlFor="check">
                  <input type="checkbox" className="check" id="check"  onMouseEnter={this.onMouseEnterTitle} onMouseLeave={this.onMouseLeaveTitle}/>
                  <span className="logging">保持登陸狀態</span>
                </label>
              </div>
              <p className="network">為減少閣下流動電話的數據使用量請連接到閣下的無線網絡</p>
            </div>
          </div>
      </div>
    );
  }
}

export default Form;
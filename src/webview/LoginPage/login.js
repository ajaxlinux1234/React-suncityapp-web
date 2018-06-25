import React, { Component } from 'react';
import { render } from 'react-dom';
import './login.css';

/*import Button from 'antd/lib/button';//antd按钮布局
<Button type="primary">antd布局按钮</Button> */


import Form from '../../components/LoginForm/Form';//form表单组件
import Load from '../../components/LoginFormQrcode/Load';//登录响应时间组件
import System from '../../components/SystemError/System';//登录系统错误组件

class Login extends Component {

  render() {
    return (
      <div className="Login">
        <div className="LoginBox">
          <img src={require('../../assets/images/sun-people-horizontal.png')} alt="" className="sunhorizontal"/>
          {/* form表单 */}
          <Form history={this.props.history}/>
          {/* 登录响应时间组件 */}
          <div style={{display:"none"}}>
            <Load />
          </div>
          {/* 登录系统错误组件 */}
          <div style={{display:"none"}}>
            <System />
          </div>
          {/* 资料错误 */}
          <p className="LoginError" style={{display:"none"}}>登入資料錯誤，請重新輸入並登入</p>
        </div>
      </div>
    );
  }
}

export default Login;
/*
 * @Author: liang.zhenquan
 * @Date: 2019-11-19 20:12:16
 * @Last Modified by: liang.zhenquan
 * @Last Modified time: 2019-11-24 21:41:08
 */
import React, { Component, } from 'react';
import { Input, Button, } from 'antd';
import { StyleSheet, css, } from 'aphrodite';
import {withRouter,} from 'react-router-dom';
import message from '@/utils/message';
import {setAdmin,} from '@/controller/storage';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }
  login = () => {
    const {userName, password,} = this.state;
    if(userName !== '' && password !=='') {
      message.success('登录成功');
      setAdmin('user', {userName, password, auth: 1,});
      this.props.history.push('/');
    } else {
      message.info('请输入完整信息');
    }
  }
  render() {
    const {userName, password,} = this.state;
    return (
      <section className={css([styles.loginComment,styles.login,])}>
        <div className={css(styles.loginComment)}>
          <h2 className={css(styles.title)} >
            ADMIN
          </h2>
          <Input maxLength={10}
            onChange={e=>this.setState({userName: e.target.value,})}
            placeholder="账号"
            prefix={<i className="iconfont icon-denglu"></i>}
            size="large"
            value={userName}
          />
          <Input.Password  className={css(styles.inputPwd)}
            maxLength={10}
            onChange={e=>this.setState({password: e.target.value,})}
            placeholder="密码"
            prefix={<i className="iconfont icon-mima"></i>}
            size="large"
            value={password}
          />
          <Button className={css(styles.btn)}
            onClick={this.login}
            type="primary"
          >登录</Button>
        </div>
      </section>
    );
  }
}
export default  withRouter(Login);
const styles = StyleSheet.create({
  // 容器
  login: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3f4',
  },
  loginComment: {
    width: '8.412rem',
    padding: ' .72rem 1.56rem',
    boxSizing: 'border-box',
    boxShadow: '0 .1rem .2rem rgba(0, 0, 0, .12)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  // 标题
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputPwd: {
    margin: '.4rem auto',
  },
  btn: {
    width: '2.4rem',
    height: '.68rem',
    border: 'none',
    borderRadius: '.08rem',
    color: '#fff',
    backgroundColor: '#1c69d4',
    cursor: 'pointer',
  },
});

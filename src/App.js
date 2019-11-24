/*
 * @Author: liang.zhenquan
 * @Date: 2019-11-20 09:41:23
 * @Last Modified by: liang.zhenquan
 * @Last Modified time: 2019-11-24 21:39:16
 */
import React from 'react';
// import {Switch,Route,} from 'react-router';
import {BrowserRouter,Switch,Route,Redirect, } from 'react-router-dom';
import Loadable from './utils/loadable';
import 'normalize.css';
import './styles/global.less';

// 公共模块
const DefaultLayout = Loadable(()=>import('./containers'));

// 基础页面
const NotFount = Loadable(()=>import(/* webpackChunkName: '404' */ './views/error/NotFount'));
const View403 = Loadable(()=>import(/* webpackChunkName: '404' */ './views/error/View403'));
const Login = Loadable(()=>import(/* webpackChunkName: 'login' */ './views/login'));
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={()=><Redirect to="/index"/>}
        />
        <Route component={Login}
          exact
          path="/login"
        />
        <Route component={NotFount}
          path="/404"
        />
        <Route component={View403}
          path="/403"
        />
        <Route component={DefaultLayout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

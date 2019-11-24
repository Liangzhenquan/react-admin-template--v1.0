/*
 * @Author: liang.zhenquan
 * @Date: 2019-11-21 19:23:49
 * @Last Modified by: liang.zhenquan
 * @Last Modified time: 2019-11-23 13:28:13
 */
import React from 'react';
import {Switch,} from 'react-router';
import {BrowserRouter,} from 'react-router-dom';
import {renderRoutes,} from 'react-router-config';
import routes from './config';
const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </BrowserRouter>
  );
};
export default Index;
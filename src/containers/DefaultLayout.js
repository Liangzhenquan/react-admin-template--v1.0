import React,{Component,} from 'react';
import routes from '@/router/config';
import {Redirect,Route,Switch,withRouter, } from 'react-router-dom';
import menu from '@/router/menu';
import Header from './Header';
import Aside from './Aside';
import CustomBreadcrumb from '@/components/customBreadcrumb';
import {getAdmin,} from '@/controller/storage';
import message from '@/utils/message';
import {Layout,} from 'antd';
import loadable from '@/utils/loadable';

const {Content,} = Layout;
const View403 = loadable(() =>import('@/views/error/View403'));
class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      auth: -1,
    };
  }
  UNSAFE_componentWillMount() {
    const user = getAdmin('user');
    this.setState({
      user,
      auth: user.auth,
    });
  }
  loginOut = () => {
    localStorage.clear();
    this.props.history.push('/login');
    message.success('退出成功');
  }
  render() {
    return (
      <Layout>
        <Aside menu={menu}/>
        <Layout>
          <Header loginOut={this.loginOut}/>
          <CustomBreadcrumb />
          <Content>
            <div className="content-wrap">
              <Switch>
                {
                  routes.map(item => (
                    <Route exact={item.exact}
                      key={item.path}
                      path={item.path}
                      render={props=>
                        !this.state.auth ? (
                          <item.Component {...props}/>
                        ) : item.auth && item.auth.includes(this.state.auth)? (
                          // <item.Component {...props}/>
                          <div>{console.log(item.auth.includes(this.state.auth))}</div>
                        ) : (
                        // 这里也可以跳转到 403 页面
                          <View403 />
                        )}
                    />
                  ))
                }
                <Redirect to="/404"/>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(DefaultLayout);
import React from 'react';
import {StyleSheet,css,} from 'aphrodite';
import {Layout,Icon,Badge,Dropdown,Menu,Avatar,} from 'antd';
const {Header,} = Layout;
const MyHeader = (props) => {
  const {loginOut,} = props;
  const menu = (
    <Menu>
      <Menu.ItemGroup title="用户设置">
        <Menu.Divider />
        <Menu.Item>
          <Icon type="edit" />
          个人设置
        </Menu.Item>
        <Menu.Item>
          <Icon theme="filled"
            type="setting"
          />
          系统设置
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item>
        <span onClick={loginOut}>
          <Icon type="logout" /> 退出登录
        </span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className={css(styles.header)}>
      <div className={css(styles.left)}>
        <Icon
          className={css(styles.iconFold)}
          type="menu-fold"
        />
      </div>
      <div className={css(styles.right)}>
        <div className="mr15">
          <a href="https://github.com/ltadpoles/react-admin"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon style={{ color: '#000', }}
              type="github"
            />
          </a>
        </div>
        <div className="mr15"
          style={{margin: '0 .2rem',}}
        >
          <Badge dot
            offset={[-2, 0,]}
          >
            <a href="https://github.com/ltadpoles/react-admin"
              style={{ color: '#000', }}
            >
              <Icon type="bell" />
            </a>
          </Badge>
        </div>
        <div>
          <Dropdown overlay={menu}
            overlayStyle={{ width: '150px', }}
          >
            <Avatar icon="user"
              size={30}
              style={{ cursor: 'pointer', }}
            />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};
MyHeader.defaultProps = {
  loginOut: () => {},
};
export default MyHeader;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {

  },
  iconFold: {
    color: '#fff',
    fontSize: '.4rem',
  },
  right: {
    display: 'flex',
  },
});
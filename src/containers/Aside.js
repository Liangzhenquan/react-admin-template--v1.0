import React from 'react';
import {Layout,Icon,} from 'antd';
import CustomMenu from '@/components/customMenu';
const {Sider,} = Layout;
const AppAside = ({menu,}) => {
  return (
    <Sider>
      <div className="logo">
        <a href="https://github.com/ltadpoles"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon style={{ fontSize: '1rem', color: '#fff',}}
            type="github"
          />
        </a>
      </div>
      <CustomMenu menu={menu}/>

    </Sider>
  );
};
export default AppAside;
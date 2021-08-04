import React, {useState} from 'react';
import {Layout, Menu} from 'antd';
import {
  AppstoreOutlined,
  DesktopOutlined,
} from '@ant-design/icons';
import {MenuInfo} from 'rc-menu/lib/interface';
import {useHistory, Switch, Route} from "react-router-dom";
import {createUseStyles} from 'react-jss';
import {useBaseStyle} from '../assets/hooks/style';
import {ViewNumContainer} from "./example/redux";
import {Webgl} from "./webgl";
import {UserOperating} from "./example/table";
import {UploadExample} from "./example/upload";
import { Three } from "./example/three";

const {Header, Sider, Content, Footer} = Layout;
const useIndexStyle = createUseStyles({
  cusHeadStyle: {
    color: 'white',
    textAlign: 'center',
  }
});
const Home = () => {
  const [menuList] = useState([
    {
      title: 'webgl',
      key: '/webgl',
      icon: DesktopOutlined,
    },
    {
      title: 'redux',
      key: '/redux',
      icon: AppstoreOutlined,
    },
    {
      title: 'User',
      key: '/User',
      icon: DesktopOutlined,
    },
    {
      title: 'UploadExample',
      key: '/UploadExample',
      icon: AppstoreOutlined,
    },
    {
      title: 'Three',
      key: '/Three',
      icon: DesktopOutlined,
    },
  ])
  const { layoutHeight100 } = useBaseStyle();
  const indexStyle = useIndexStyle();
  const history = useHistory();
  function menuSelectClick({key}: MenuInfo) {
    history.push(`${key}`);
  }
  return (
      <Layout className={layoutHeight100}>
        <Header className={indexStyle.cusHeadStyle}>Header</Header>
        <Layout>
          <Sider className={layoutHeight100}>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                onClick={menuSelectClick}
            >
              {menuList.map((v) => (
                  <Menu.Item key={v.key} icon={<v.icon/>}>
                    {v.title}
                  </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <Switch>
                <Route path={"/webgl"} component={Webgl}/>
                <Route path={"/redux"} component={ViewNumContainer}/>
                <Route path={"/User"} component={UserOperating}/>
                <Route path={"/UploadExample"} component={UploadExample}/>
                <Route path={"/Three"} component={Three}/>
              </Switch>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
  )
}
export {
  Home,
}

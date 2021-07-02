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
import {ViewNumContainer} from "./redux-example";
import {Webgl} from "./webgl";

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
  ])
  const baseStyle = useBaseStyle();
  const indexStyle = useIndexStyle();
  const history = useHistory();
  function menuSelectClick({key}: MenuInfo) {
    history.push(`${key}`);
  }
  return (
      <Layout className={baseStyle.height100}>
        <Header className={indexStyle.cusHeadStyle}>Header</Header>
        <Layout>
          <Sider className={baseStyle.height100}>
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

import React, {ReactComponentElement, useState} from 'react';
import {Layout, Menu} from 'antd';
import {
  AppstoreOutlined,
  DesktopOutlined,
} from '@ant-design/icons';
import {MenuInfo} from 'rc-menu/lib/interface';
import {Switch, Route, useRouteMatch, Link, useHistory} from "react-router-dom";
import {createUseStyles} from 'react-jss';
import {useBaseStyle} from '../assets/hooks/style';
import {ViewNumContainer} from "./example/redux";
import {Webgl} from "./webgl";
// import {UserOperating} from "./example/table";
import {UploadExample} from "./example/upload";
import {Three} from "./example/three/example1";
import {Sphere} from "./example/three/sphere";

const {Header, Sider, Content, Footer} = Layout;
const {SubMenu} = Menu;
const useIndexStyle = createUseStyles({
  cusHeadStyle: {
    color: 'white',
    textAlign: 'center',
  }
});
interface MenuItemType {
  title: string,
  key: string,
  icon?: any,
  children?: MenuItemType[],
  component?: ReactComponentElement<any>,
}
const Home = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const [menuList] = useState([
    {
      title: 'webgl',
      key: '/webgl/:params',
      icon: DesktopOutlined,
      component: Webgl,
    },
    {
      title: 'redux',
      key: '/redux',
      icon: AppstoreOutlined,
      component: ViewNumContainer,
    },
    // TODO 接口原因暂时关闭
    // {
    //   title: 'User',
    //   key: '/User',
    //   icon: DesktopOutlined,
    // },
    {
      title: 'UploadExample',
      key: '/UploadExample',
      icon: AppstoreOutlined,
      component: UploadExample,
    },
    {
      title: 'ThreeExample',
      key: '/ThreeExample',
      icon: DesktopOutlined,
      children: [
        {
          title: '球体',
          key: '/Sphere',
          component: Sphere,
        },
        {
          title: 'Three',
          key: '/Three',
          component: Three,
        }
      ],
    },
  ])
  const { layoutHeight100 } = useBaseStyle();
  const indexStyle = useIndexStyle();
  function menuSelectClick({key}: MenuInfo) {
    // console.log(key);
    // TODO 路由方式带参数跳转
    // history.push(`/home/webgl/${JSON.stringify([1,2,3])}`)
  }
  function getMenuItem() {
    return menuList.map((v) => {
      if(v.children) {
        return <SubMenu key={v.key} icon={<v.icon/>} title={v.title}>
          { v.children.map((c: any) => (
              <Menu.Item key={c.key}>
                <Link to={`${match.url}${c.key}`}>{c.title}</Link>
              </Menu.Item>
          ))}
        </SubMenu>
      } else {
        return <Menu.Item key={v.key} icon={<v.icon/>}>
          { resLinkComponent(v as any) }
        </Menu.Item>
      }
    })
  }
  function resLinkComponent(v: MenuItemType) {
    if (v.title === 'webgl') {
      return <Link to={`${match.url}/${v.title}/${JSON.stringify({a: 1, b: [0,1,2,3]})}`}>{v.title}</Link>;
    } else {
      return <Link to={`${match.url}${v.key}`}>{v.title}</Link>;
    }
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
              {getMenuItem()}
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <Switch>
                {menuList.map((item: any) => {
                  if (item.children) {
                    return item.children.map((child: any) => (<Route path={`${match.url}${child.key}`} key={child.key} component={child.component}/>))
                  } else {
                    return <Route path={`${match.url}${item.key}`} component={item.component}  key={item.key}/>
                  }
                })}
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

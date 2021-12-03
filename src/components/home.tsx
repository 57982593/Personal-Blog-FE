import React from 'react';
import { Layout, Menu } from 'antd';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { useBaseStyle } from '../styles/base';
import { ViewNumContainer } from './redux';
import { UploadExample } from './upload';
import { Three } from './3d/example1';
import { Sphere } from './3d/sphere';
import { classExample } from './learn/classComponent';
import { UseContextExample } from './learn/useContext';
import { ByteBeating } from './interview/byteBeating';
import { BasicType } from './learn/basicType';
import { MenuItemType } from '../types';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const menuList = [
  {
    title: '面试题',
    key: '/interview',
    component: ByteBeating,
  },
  {
    title: '学习',
    key: 'learn',
    children: [
      {
        title: 'tyscript',
        key: '/basicType',
        component: BasicType,
      },
      {
        title: 'redux',
        key: '/redux',
        component: ViewNumContainer,
      },
      {
        title: '上传/切片上传',
        key: '/UploadExample',
        component: UploadExample,
      },
      {
        title: 'react-useContext',
        key: '/UseContextExample',
        component: UseContextExample,
      },
      {
        title: 'react-类组件',
        key: '/classComponentExample',
        component: classExample,
      },
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
];

const Home = () => {
  const match = useRouteMatch();
  const base = useBaseStyle();

  function getMenuItem() {
    return menuList.map( ( v ) => {
      if ( v.children ) {
        return <SubMenu key={ v.key } title={ v.title }>
          { v.children.map( ( c: any ) => (
              <Menu.Item key={ c.key }>
                <Link to={ `${ match.url }${ c.key }` }>{ c.title }</Link>
              </Menu.Item>
          ) ) }
        </SubMenu>;
      } else {
        return <Menu.Item key={ v.key }>
          { resLinkComponent( v as any ) }
        </Menu.Item>;
      }
    } );
  }

  function resLinkComponent( v: MenuItemType ) {
    if ( v.title === 'webgl' ) {
      return <Link
          to={ `${ match.url }/${ v.title }/${ JSON.stringify( { a: 1, b: [ 0, 1, 2, 3 ] } ) }` }>{ v.title }</Link>;
    } else {
      return <Link to={ `${ match.url }${ v.key }` }>{ v.title }</Link>;
    }
  }

  return (
      <Layout className={ base.layoutHeight100 }>
        <Layout>
          <Sider className={ `${ base.layoutHeight100 } ${ base.homeSider }` }>
            <Menu
                defaultSelectedKeys={ [ '1' ] }
                defaultOpenKeys={ [ 'sub1' ] }
                mode="inline"
            >
              { getMenuItem() }
            </Menu>
          </Sider>
          <Layout>
            <Header className={ base.homeHeader }>有时候得认命，有时候得信命，但是大多数的时候都得与命运抗衡到底！</Header>
            <Content className={ base.homeContent }>
              <Switch>
                { menuList.map( ( item: any ) => {
                  if ( item.children ) {
                    return item.children.map( ( child: any ) => (
                        <Route path={ `${ match.url }${ child.key }` } key={ child.key }
                               component={ child.component }/>) );
                  } else {
                    return <Route path={ `${ match.url }${ item.key }` } component={ item.component }
                                  key={ item.key }/>;
                  }
                } ) }
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
  );
};
export {
  Home,
};

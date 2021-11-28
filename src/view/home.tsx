import React, { ReactComponentElement } from 'react';
import { Layout, Menu } from 'antd';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { useBaseStyle } from '../assets/hooks/style';
import { ViewNumContainer } from './example/redux';
import { UploadExample } from './example/upload';
import { Three } from './example/three/example1';
import { Sphere } from './example/three/sphere';
import { classExample } from './example/classComponent';
import { UseContextExample } from './example/useContext';
import { ByteBeating } from '../components/interview/byteBeating';
import { BasicType } from '../components/learn/basicType';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

interface MenuItemType {
  title: string,
  key: string,
  children?: MenuItemType[],
  component?: ReactComponentElement<any>,
}

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
    ],
  },
  {
    title: 'redux',
    key: '/redux',
    component: ViewNumContainer,
  },
  {
    title: 'UploadExample',
    key: '/UploadExample',
    component: UploadExample,
  },
  {
    title: 'UseContextExample',
    key: '/UseContextExample',
    component: UseContextExample,
  },
  {
    title: 'classComponentExample',
    key: '/classComponentExample',
    component: classExample,
  },
  {
    title: 'ThreeExample',
    key: '/ThreeExample',
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
        <Header className={ base.homeHeader }>有时候得认命，有时候得信命，但是大多数的时候都得与命运抗衡到底！</Header>
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
            <Content className={base.homeContent}>
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

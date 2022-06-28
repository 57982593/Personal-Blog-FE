import React from 'react';
import { Layout } from 'antd';
import { Menu, MenuProps } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useBaseStyle } from './styles/base';
import { Route, Switch, useHistory } from 'react-router-dom';
import Canvas from './pages/canvas';
import RecursiveComponent from './pages/recursiveComponent';
import VirtualList from './pages/virtualList';

type MenuItem = Required<MenuProps>['items'][number];

const { Sider, Content } = Layout;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('前端常用功能', 'interview', <MailOutlined />, getRouterInfo().routerInfo),
];

const rootSubmenuKeys = ['interview'];

function App() {
  const history = useHistory();
  const base = useBaseStyle();
  const [openKeys, setOpenKeys] = React.useState(['interview']);
  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
      <Layout className={ base.layoutHeight100 }>
          <Sider className={ `${ base.layoutHeight100 } ${ base.homeSider }` }>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onClick={({key}) => { history.push(key) }}
                onOpenChange={onOpenChange}
                style={{ width: 256 }}
                items={items}/>
          </Sider>
          <Content className={ base.homeContent }>
            {getRouterInfo().routerEl}
          </Content>
      </Layout>
  );
}

function getRouterInfo() {
    const routerEl =  (
        <Switch>
            <Route path='/recursive-component' data-set={{name: '递归组件'}}>
                <RecursiveComponent/>
            </Route>
            <Route path='/canvas' data-set={{name: 'canvas'}}>
                <Canvas/>
            </Route>
            <Route path='/virtualList' data-set={{name: '虚拟列表'}}>
              <VirtualList/>
            </Route>
        </Switch>
);

        
       const routerInfo = routerEl.props.children.map(({ props }: any) => getItem(props['data-set'].name, props.path))

    return {
        routerEl,
        routerInfo,
    };
}

export {
  App,
};

import React from 'react';
import { Layout } from 'antd';
import { Menu, MenuProps } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useBaseStyle } from '../styles/base';

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
  getItem('面试题', 'interview', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
];

const rootSubmenuKeys = ['interview', 'sub2', 'sub4'];


function App() {
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
                onOpenChange={onOpenChange}
                style={{ width: 256 }}
                items={items}/>
          </Sider>
          <Content className={ base.homeContent }>
              内容
          </Content>
      </Layout>
  );
}

export {
  App,
};

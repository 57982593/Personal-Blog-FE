import { Layout } from 'antd';
import { useState } from 'react';
import originData from './data.json';
import AntdVirtualList from './antdVirtualList';

const { Header, Footer, Content } = Layout;

const columns: any[] = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'id',
    width: 200,
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
];
function VirtualList() {
  const data = originData.slice(0,20);
  const [countHeight] = useState(data.length * 40);
  const style = {
    height: `${countHeight}px`, 
    width: '100%', 
    border: '1px solid blue',
  };
  return (
    <Layout>
      <Header style={{background: '#FFFFFF'}}>虚拟列表</Header>
      <Content style={{height: 'calc(100vh - 184px)'}}>
        <AntdVirtualList/>
      </Content>
    </Layout>
  );
};

export default VirtualList;
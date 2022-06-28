import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useState } from 'react';
import originData from './data.json';
import './index.css';
const ContainerHeight = 752;

const AntdVirtualList: React.FC = () => {
  let [current, setCurrent] = useState(0);
  const pageSize = 20;
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };

  function treeToFlat(data: any[], arr: any[], sortId: number) {
    data.forEach((item: any) => {
      arr.push({...item, sortId: sortId += 1});
      if(item.children && item.children.length > 0) {
        treeToFlat(item.children, arr, sortId);
      } 
    })
  }

  const appendData = () => {
    const res: any[] = originData.slice(current * pageSize, (current+1)*pageSize);
    const arr: any[] = [];
    let sortId = 0;
    treeToFlat(res, arr, sortId);
    console.log(arr, res);
    if(res.length > 0) {
      setData(data.concat(arr));
      setCurrent(current += 1);
    }
  };
  console.log('data=>',data);
  function collapse() {
    console.log(111, data.splice(0,6), data);
    setData([...data]);
  }

  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="id"
        onScroll={onScroll}
      >
        {(item: any) => {
          const isFirstLevel = !item.rootSetId && !item.parentSetId;
          const isSecondLevel = item.rootSetId === item.parentSetId;
          const isLastLevel = item.rootSetId && item.parentSetId && item.rootSetId !== item.parentSetId;
          let titleMariginClassName = '';
          if(isSecondLevel) {
            titleMariginClassName = 'SecondLevel';
          }
          if(isLastLevel) {
            titleMariginClassName = 'lastLevel';
          }
          if(isFirstLevel){
            titleMariginClassName = '';
          }


          return (<List.Item key={item.id}>
            <div className={titleMariginClassName}>
               {(isFirstLevel || isSecondLevel) && (<button onClick={() => collapse()}>展开</button>)}
               {item.title}
            </div>
            <div>rootSetId:{item.rootSetId?item.rootSetId:'-'}</div>
            <div>parentSetId:{item.parentSetId?item.parentSetId:'-'}</div>
            <div>id:{item.id}</div>
          </List.Item>)
        }}
      </VirtualList>
    </List>
  );
};

export default AntdVirtualList;
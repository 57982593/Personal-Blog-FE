import { List } from 'antd';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useState } from 'react';
import originData from './data.json';
import './index.css';
import _ from 'lodash';
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
      item.executors.forEach((ex: any) => {
        arr.push({...ex, sortId: sortId += 1, dataType: 'ex'})
      })
      if(item.children && item.children.length > 0) {
        treeToFlat(item.children, arr, sortId);
      } 
    })
  }

  function createExInfo(item: any) {
    return {
      date: [], 
              minStartDate: '', 
              maxEndDate: '', 
              totalWorkHours: 0,
              totalActualHours: 0,
              totalOverTimeHours: 0,
              parentSetId: item.parentSetId, 
              rootSetId: item.rootSetId 
    };
  }

  function getFlatStories(rawData: any[]) {
    const arr: any[] = [];
    let sortId = 0;
    treeToFlat(rawData, arr, sortId);

    const firstLevel: any = {};
    const secondLevel: any = {};
    const thirdLevel: any = {};

    arr.forEach((item: any) => {
      let firstKey;
      let secondKey;
      let thirdKey;
      const isSecondLevel = item.rootSetId && item.parentSetId && item.rootSetId === item.parentSetId;
      const isThirdLevel = item.rootSetId && item.parentSetId && item.rootSetId !== item.parentSetId;

      firstKey = item.rootSetId || item.id;
      if(isSecondLevel) {
        secondKey = item.id;
      }
      if(isThirdLevel) {
        secondKey = item.parentSetId;
        thirdKey = item.id;
      }
  
      if(item.executors && item.executors.length > 0) {
          if(!firstLevel[firstKey]) {
            firstLevel[firstKey] = createExInfo(item);
          }
          firstLevel[firstKey].date.push(item.executors);
          if(secondKey) {
            if(!secondLevel[secondKey]) {
              secondLevel[secondKey] = createExInfo(item);
            }
            secondLevel[secondKey].date.push(item.executors);
          }

          if(thirdKey) {
            if(!thirdLevel[thirdKey]) {
              thirdLevel[thirdKey] = createExInfo(item);
            }
            thirdLevel[thirdKey].date.push(item.executors);
          }
      }
    });

    getExInfo(firstLevel);
    getExInfo(secondLevel);
    getExInfo(thirdLevel);

    arr.forEach((item: any) => {
      const isFirstLevel = !item.rootSetId && !item.parentSetId;
      const isSecondLevel = item.rootSetId && item.parentSetId && item.rootSetId === item.parentSetId;
      const isThirdLevel = item.rootSetId && item.parentSetId && item.rootSetId !== item.parentSetId;
      const isEx = item.dataType === 'ex';

      if(!isEx) {
        if(isFirstLevel) {
          item.exInfo = firstLevel[item.id];
        }
  
        if(isSecondLevel) {
          item.exInfo = secondLevel[item.id];
        }
  
        if(isThirdLevel) {
          item.exInfo = thirdLevel[item.id];
        }
      }
    })
    return arr;
  }
  
  function getExInfo(map: any) {
    _.keys(map).forEach((key: string) => {
      if(map[key].date.length > 0) {
        const item = map[key].date.flat(2);
        const dailys = item.map((d:any) => d.storyEXDailies).flat(2);
        dailys.forEach((d: any) => {
          map[key].totalWorkHours += d.workHours;
          map[key].totalActualHours += d.actualHours;
          map[key].totalOverTimeHours += d.overTimeHours;
        })
        const startTime = item.sort((a: any,b: any) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())[0].startTime;;
        const endTime = item.sort((a: any,b: any) => new Date(b.endTime).getTime() - new Date(a.endTime).getTime())[0].endTime;
        map[key].minStartDate = startTime;
        map[key].maxEndDate = endTime;
      }
    })
  }

  const appendData = () => {
    const res: any[] = originData.slice(current * pageSize, (current+1)*pageSize);

    const flatStories = getFlatStories(res);

    if(res.length > 0) {
      setData(data.concat(flatStories));
      setCurrent(current += 1);
    }
  };


  // console.log('originData=>',originData);
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
               {/* {(isFirstLevel || isSecondLevel) && (<button onClick={() => collapse()}>展开</button>)} */}
               {item.title}
            </div>
            <div>数据类型：{item.dataType?item.dataType:'-'}</div>
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
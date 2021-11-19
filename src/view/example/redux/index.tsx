import React, {useEffect, useState} from "react"
import {Button, Space} from 'antd'
import store from '../../../redux/store'
import {add, back} from '../../../redux/actions'
import {createUseStyles} from "react-jss"

const useReduxStyle = createUseStyles({
  rNumContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rTitleCenter: {
    textAlign: "center",
  }
})

const ViewNumContainer = () => {
  const reduxStyle = useReduxStyle()
  const [, setNum] = useState({})

  function addClick() {
    //调用action 更新数据
    store.dispatch(add())
  }

  function backClick() {
    store.dispatch(back())
  }
  let a = 0;
  function resData(){
    a++;
    let data = [1,2,4,5,7,8];
    if (a === 3) {
      data = [0]
    }
    return new Promise(resolve => setTimeout(() => resolve(data), 1000));
  }
  function allFn() {
    const arr: any = [];
    async function test() {
      const res: any = await resData();
      arr.push(res);
      while (res.length === 6) {
        await test();
      }
    }
    test();
    console.log(arr);
  }
  allFn();

  const arr = [
    {
      id: 0,
      value: 'value-0',
    },
    {
      id: 1,
      value: 'value-1',
      parent: 0,
    },
    {
      id: 2,
      value: 'value-2',
      parent: 1,
    },
    {
      id: 3,
      value: 'value-3',
      parent: 0,
    },
    {
      id: 4,
      value: 'value-4',
      parent: 1,
    },
    {
      id: 5,
      value: 'value-5',
      parent: 3,
    },
  ];

  /*useEffect的返回值用来在组件销毁时做些什么...*/
  useEffect(() => {

    async function fn() {
      setTimeout(() => {
        console.log(4);
      }, 0);

      const p = new Promise((resolve) => {
        console.log(1);
        resolve(null);
        console.log(2);
      });
      p.then(() => {
        console.log(3);
      });
      console.log(0);
      await p;
      console.log(6);
    }
    // fn();

    /*监听state改边,subscribe会返回一个函数用来销毁监听*/
    const unsubscribe = store.subscribe(() => {
      console.log(111, store.getState());
      //当数据改变时需要修改组件状态来重新渲染组件
      setNum({})
    });
    return () => {
      // TODO 销毁时会调用，但是经测试没有触发，暂时未找到原因
      console.log('我被销毁了')
      //销毁监听
      unsubscribe()
    };
  });
  return (
      <div className={reduxStyle.rNumContainer}>
        <div>
          <h1 className={reduxStyle.rTitleCenter}>{store.getState().num}</h1>
          <Space>
            <Button type={"primary"} onClick={addClick}>+</Button>
            <Button onClick={backClick}>-</Button>
          </Space>
        </div>
      </div>
  )
}

export {
  ViewNumContainer,
};




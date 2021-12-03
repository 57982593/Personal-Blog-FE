import React from 'react';
import { JsCodeTemplate } from '../basicComponts/jsCodeTemplate';

function ByteBeating() {
  const questions = {
    qts1: `async function fn() {
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
    fn();// 1 2 0 3 6 4`,
    qts2: `let a = 0;
    function resData(){
        a++;
        let data = [1,2,4,5,7,8];
        if (a === 3) {
            data = [0]
        }
        return new Promise(resolve => setTimeout(() => resolve(data), 1000));
    }
    async function allRes() {
        const arr = [];
        let res;
        do{
            res =  await resData();
            arr.push(...res);
        } while (!(res.length < 6))
        return arr;
    }
    allRes().then((res) => {
        console.log(res); //[1, 2, 4, 5, 7, 8, 1, 2, 4, 5, 7, 8, 0]
    });`,
    qts3: `const arr = [
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
        {
            id: 6,
            value: 'value-5',
            parent: 2,
        },
        {
            id: 7,
            value: 'value-5',
            parent: 4,
        },
        {
            id: 8,
            value: 'value-5',
            parent: 5,
        },
        {
            id: 9,
            value: 'value-5',
            parent: 6,
        },
    ];
    let obj = {};
    //首先根据 parent 进行分组
    arr.forEach((item) => {
        let parentId = item.parent == undefined ? '-1': item.parent;
        obj[parentId] = obj[parentId] || [];
        obj[parentId].push(item)
    })
    delete obj['-1'];
    let root = arr[0], rArr = obj[root.id];
    // 递归
    function findSon(root, rArr){
        if(rArr){
            root.children = root.children || [];
            rArr.forEach((val) => {
                let eachSon = findSon(val, obj[val.id]);
                root.children.push(eachSon)
            })
        }
        return root
    }
    findSon(root, rArr);`,
    qts4: `function forEachFn (cb) {
      if (Object.prototype.toString.call(this) === '[object Array]') {
        for(let i=0;i<this.length;i++) {
          cb(this[i], i);
        }
      } else {
        throw new Error('不是数组');
      }
    }
    Array.prototype.forEachFn = forEachFn;
    arr.forEachFn((item, index) => {
      console.log(item, index);
    })`,
  };
  return (
      <div>
        <p>第一题：下例程序输出的顺序是什么？</p>
        <JsCodeTemplate jsText={questions.qts1}/>
        <p>这一题原理主要就是就是考的事件循环机制。new Promise里的代码为同步任务，.then/await为微任务，setTimeout为宏任务。await 会阻塞后面的代码，这点需要注意。</p>
        <p>第二题：有100条数据，每次请求20条，当请求的返回不足20条或者请求数据的总数等于100条时，结束请求并打印全部的请求数据。</p>
        <JsCodeTemplate jsText={questions.qts2}/>
        <p>这道题使用了do-while，该循环的特性就是最少都会循环一次。</p>
        <p>第三题：将下例数组中的数组结构变换成树型结构</p>
        <JsCodeTemplate jsText={questions.qts3}/>
        <p>利用了桶与递归，方法有很多种，这是其中一种。</p>
        <p>第四题：实现一个forEach.</p>
        <JsCodeTemplate jsText={questions.qts4}/>
        <p>这里需要熟练this指向原型链等问题。</p>
      </div>
  );
}

export {
  ByteBeating,
};

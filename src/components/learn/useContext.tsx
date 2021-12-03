import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'antd';

const TestContext = React.createContext( {
  childrenC: 'Hi, childrenC!',
  testHandle: ( text: string ) => {
  }
} );

function ChildrenA() {
  return (
      <div>
        <div>ChildrenA</div>
        <ChildrenB/>
      </div>
  );
}

function ChildrenB() {
  return (
      <div>
        <div>ChildrenB</div>
        <ChildrenC/>
      </div>
  );
}

function ChildrenC() {
  const context = useContext( TestContext );
  const [ text, setText ] = useState( '初始化' );
  useEffect( () => {
    requestAnimationFrame( () => {
      console.log( '我被调用了！' );
    } );
    console.log( '我就试试' );
  }, [] );
  useEffect( () => {
    console.log( '你别试了' );
    setText( ( prevState ) => {
      console.log( 'prevState->', prevState );
      return 'it changed';
    } );
  }, [ context.childrenC ] );
  return (
      <div>
        <div>ChildrenC: { text }</div>
        {/*两种用法：第一用直接使用context,第二种使用Consumer 标签*/ }
        <Button onClick={ () => {
          context.testHandle( '我去你大爷！' );
        } }>{ context.childrenC }</Button>
        {/*<TestContext.Consumer>*/ }
        {/*  { ({ childrenC, testHandle }) => (<Button onClick={() => {testHandle('我去你大爷！')}}>{childrenC}</Button>)}*/ }
        {/*</TestContext.Consumer>*/ }
      </div>
  );
}

function UseContextExample() {
  const [ a, setA ] = useState( {
    childrenC: 'Hi, 我是你祖宗。',
    testHandle,
  } );

  function testHandle( text: string ) {
    setA( () => ({ childrenC: text, testHandle }) );
  }

  return (
      <div>
        {/*当使用TestContext.Provider时，消费组件会接收到该组件传递的值，如果不设置会接受默认值。*/ }
        <TestContext.Provider value={ a }>
          <ChildrenA/>
        </TestContext.Provider>
        <Button onClick={ () => {
          setA( { childrenC: 'Hi, 我是你二祖宗。', testHandle } );
        } }>改变一下</Button>
      </div>
  );
}

export {
  UseContextExample,
};

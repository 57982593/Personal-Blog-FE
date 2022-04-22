import React from 'react';

function A( props: any ) {
  return (
      <div>
        <div>我是A</div>
        <div>{ props.value }</div>
      </div>
  );
}

function B( props: any ) {
  return (
      <div>
        <div>B</div>
        { props.value }
      </div>
  );
}

function WithComponent( WrappedComponent: any, data: any ) {
  return (<WrappedComponent value={ 'test' }/>);
}

export {
  WithComponent,
  A,
  B,
};

import React from "react";
import {Button} from "antd";

class Test extends React.Component<any, any>{
  render(){
    return (
        <div>
          <h1>{this.props.name}</h1>
          {this.props.add}
          {this.props.reduce}
        </div>
    )
  }
}
export class classExample extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = { counter: 0, id: 'id' };
    console.log('constructor, this.state->', this.state)
  }
  static getDerivedStateFromProps(){

  }
  shouldComponentUpdate( nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any ): boolean {
    console.log('shouldComponentUpdate ->', this);
    return true;
  }
  componentDidMount() {
    const dom = document.querySelector('#test') as any;
    console.log('componentDidMount, dom->', dom, this);
  }
  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    console.log('componentDidUpdate',prevProps, prevState, snapshot)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  add = () => {
    console.log('beforeAdd', this.state)
    this.setState((state: any) => {
      return { counter: state.counter + 1 }
    }, () => {
      console.log('add', this.state)
    })
  }
  reduce = () => {
    this.setState((state: any) => {
      return {counter: state.counter - 1}
    })
  }

  render() {
    return (
        <div>
          <h1>{this.state.id}</h1>
          <Test
              name={this.state.counter}
              reduce={<Button onClick={this.reduce}>-</Button>}
              add={<Button onClick={this.add}>+</Button>}>
            测试一下
          </Test>
        </div>
    );
  }
}

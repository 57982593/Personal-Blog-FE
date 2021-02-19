import React, {useState} from "react";
import {Menu} from "antd";
import {MailOutlined} from '@ant-design/icons';
// import about from "../other/about";
// import {useRouteMatch, Switch, Route, Link} from 'react-router-dom';

const {SubMenu} = Menu;

export const Home = () => {
  const [list] = useState([{
    title: '老王与憨憨', id: 'start',
    child: [
      {title: '二零一九年八月', id: '2019-8'},
      {title: '二零一九年九月', id: '2019-9'},
      {title: '二零一九年十月', id: '2019-10'},
      {title: '二零一九年十一月', id: '2019-11'},
      {title: '二零一九年十二月', id: '2019-12'},
      {title: '二零二零年一月', id: '2020-1'},
      {title: '二零二零年二月', id: '2020-2'},
      {title: '二零二零年三月', id: '2020-3'},
      {title: '二零二零年四月', id: '2020-4'},
      {title: '二零二零年五月', id: '2020-5'},
      {title: '二零二零年六月', id: '2020-6'},
      {title: '二零二零年七月', id: '2020-7'},
      {title: '二零二零年八月', id: '2020-8'},
      {title: '二零二零年九月', id: '2020-9'},
      {title: '二零二零年十月', id: '2020-10'},
      {title: '二零二零年十一月', id: '2020-11'},
      {title: '二零二零年十二月', id: '2020-12'}
    ]
  }])

  // const {path} = useRouteMatch();

  function menuEvent() {
    console.log('点击了')
  }

  return (
      <div>
        {/*<nav>*/}
        {/*  <Link to={`${path}/about`}>*/}
        {/*    about*/}
        {/*  </Link>*/}
        {/*</nav>*/}
        {/*<Switch>*/}
        {/*  <Route path={`${path}/about`} component={about}></Route>*/}
        {/*</Switch>*/}
        <Menu
            onClick={menuEvent}
            className={'height-vh'}
            style={{width: 256}}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['start']}
            mode="inline"
        >
          {list.map(value => <SubMenu key={value.id} icon={<MailOutlined/>} title={value.title}>
            {value.child.map(v => <Menu.Item key={v.id}>{v.title}</Menu.Item>)}
          </SubMenu>)}
        </Menu>
      </div>
  );
}

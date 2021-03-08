import React, {useState} from "react";
import {Menu, Layout} from "antd";
import {MailOutlined} from '@ant-design/icons';
import about from "../other/about";
import {Switch, Route, useHistory} from 'react-router-dom';
import "../css/app.css";

const {SubMenu} = Menu;
const {Sider, Content} = Layout;

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
  const history = useHistory()
  function menuEvent() {
    history.push("/about")
    console.log('点击了')
  }

  return (
      <div className="height-100">
        <Layout className="height-100">
          <Sider width={256}>
            <Menu
                onClick={menuEvent}
                style={{width: 256,height: '100%'}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['start']}
                mode="inline"
            >
              {list.map(value => <SubMenu key={value.id} icon={<MailOutlined/>} title={value.title}>
                {value.child.map(v => <Menu.Item key={v.id}>{v.title}</Menu.Item>)}
              </SubMenu>)}
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <Switch>
                <Route path="/about" component={about}></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
  );
}

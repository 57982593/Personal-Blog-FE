import React from 'react';
import {Form, Input, Button} from 'antd';
import { useBaseStyle } from "../../assets/hooks/style";
import useLoginReq from "./request";
import { useLocation, useHistory } from "react-router-dom";

function Login() {
  const { layoutVerticalCenter, layoutHeight100 } = useBaseStyle();
  const { login } = useLoginReq();
  console.log(useLocation(), useHistory());
  async function onFinish(values: any) {
    console.log('Success:', values);
    const res = await login(values.username, values.password);
    console.log(res);
  }

  function onFinishFailed(errorInfo: any) {
    console.log('Failed:', errorInfo);
  }

  return (
      <div className={`${layoutVerticalCenter} ${layoutHeight100}`}>
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
          <Form.Item
              label="Username"
              name="username"
              rules={[{required: true, min: 10, max: 20}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
              label="Password"
              name="password"
              rules={[{required: true, min: 8, max: 24}]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type="primary" htmlType="submit">
              Login in
            </Button>
          </Form.Item>
        </Form>
      </div>
  )
}

export {
  Login,
}

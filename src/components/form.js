import React, { useState, useEffect } from 'react';

import 'antd/dist/antd.css';

import { Form, Input, Button, Checkbox } from 'antd';


const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 11,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 10,
  },
};

const Form1 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React form POST Data' })
    };
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(data => setUsername(data.value));
        

}, []);
  
  
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <div>
      <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input
         placeholder="User Name"
         value={username} 
         onChange={event => {
           setUsername(event.target.value);
         }}/>
    
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password 
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
        />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" onClick={e => onSubmitHandler(e)}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    <div>
        Post data with React Form: 
        <section>Username :{username}</section>
    </div>
  </div>
     
    

    
  );
};

export default Form1;
import React, { useState, useEffect } from 'react';

import 'antd/dist/antd.css';

import {  Input} from 'antd';
import Form, { Field } from 'rc-field-form';

export default () => {
  const [form] = Form.useForm();

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
  

  return (
    <div>
      <form onSubmit={event => {
      event.preventDefault();
      event.stopPropagation();
      form.validateFields().then(function (values) {
        console.log(values);
      }) 
      .catch(function (e) {
        return e;
      });
    }}>
      <Form 
        component={false} 
        form={form}

      name="basic"
      initialValues={{
        remember: true,
      }}

      >
        Username : 
        <Field name="username">
          <Input placeholder="Username" 
          value={username} 
         onChange={event => {
           setUsername(event.target.value);
         }}/>
        </Field>
        <br />
        Password : 
        <Field name="password">
        <Input.Password 
        placeholder="Password"
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}/>
        </Field>
      </Form>
      <button type="primary"  >
          Submit
      </button>
    </form>
      
    <div>
        Post data with React Form: 
        <section>Username :{username}</section>
    </div>
  </div>
  );
};


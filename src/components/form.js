import React, { useState, useEffect,useCallback } from 'react';

import { TextField,Button } from '@shopify/polaris';
import Form, { Field } from 'rc-field-form';


export default () => {
  const [form] = Form.useForm();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = useCallback((newValue) => setUsername(newValue), []);
  const handlePassword = useCallback((newValue) => setPassword(newValue), []);

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
        <br />

        <Field name="username">
          <TextField label="Email" value={username} style={{type: "right",width: 5}} onChange={handleUser} />
        </Field>

        <br />

        <Field name="password">
          <TextField label="Password" value={password} type= "password" onChange={handlePassword} />
        </Field>
      </Form>

      <Button primary>Submit</Button>
    </form>
      
    <div>
        Post data with React Form: 
        <section>Username :{username}</section>
    </div>
  </div>
  );
};


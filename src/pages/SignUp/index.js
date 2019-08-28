import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email('Invalid mail')
    .required('An e-mail is needed'),
  password: Yup.string()
    .min(6, 'Please at least 6 characters')
    .required('Invalid password'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Name" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">Sign Up</button>
        <Link to="/">Log In</Link>
      </Form>
    </>
  );
}

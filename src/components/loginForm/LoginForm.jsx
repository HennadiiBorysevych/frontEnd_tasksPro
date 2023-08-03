import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginSchema from '../../validationSchemas/loginSchema';

const initialValues = {
  email: '',
  password: '',
};

let password = false;
let sheesh = 'password';

const LoginForm = () => {
  const onHandleSubmit = ({ email, password }) => {
    console.log({ email, password });
    const data = { email, password };
    alert(JSON.stringify(data, null, 2));
  };

  const onHandleClick = () => {
    password = !password;
    sheesh = !password ? 'password' : 'text';
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={values => {
        onHandleSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" />
          <Field
            id="password"
            name="password"
            type={sheesh}
            placeholder="Create a password"
          />
          <Field
            id="checkbox"
            name="checkbox"
            type="checkbox"
            onClick={onHandleClick}
          ></Field>

          <ErrorMessage name="password" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

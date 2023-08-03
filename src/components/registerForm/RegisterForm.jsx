import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import registerSchema from '../../validationSchemas/registerSchema';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

let password = false;
let sheesh = 'password';

const RegisterForm = () => {
  const onHandleSubmit = ({ name, email, password }) => {
    console.log({ name, email, password });
    const data = { name, email, password };
    alert(JSON.stringify(data, null, 2));
  };

  const onHandleClick = () => {
    password = !password;
    sheesh = !password ? 'password' : 'text';
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={onHandleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="form">
          <Field name="name" type="name" placeholder="Enter your name" />
          <ErrorMessage name="name" />
          <Field name="email" type="email" placeholder="Enter your email" />
          <ErrorMessage name="email" />
          <Field
            name="password"
            type={sheesh}
            placeholder="Create a password"
          />
          <ErrorMessage name="password" />

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

export default RegisterForm;

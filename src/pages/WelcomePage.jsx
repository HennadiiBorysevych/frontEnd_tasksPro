import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Input} from '../components';

const WelcomePage = () => {
  return (
    <>
      {/* <PrimaryButton hasIcon={true} svgName="icon-plus" type='button' onClick={() => console.log('Click PrimaryButton')}>
        Add
      </PrimaryButton> */}
      {/* <SvgIcon svgName="icon-Project" stroke="#FFFFFF" /> */}
      <Input placeholder="Title" />
      <Input multiline="true" placeholder="Description" />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {}}
      >
        <Form style={{ position: 'relative' }}>
          <Field
            name="email"
            as={Input}
            type="email"
            placeholder="Enter your email"
          />
          <Field
            name="password"
            as={Input}
            type="password"
            placeholder="Create a password"
          />
        </Form>
      </Formik>
    </>
  );

};

export default WelcomePage;

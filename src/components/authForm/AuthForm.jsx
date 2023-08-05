import { Formik, Form, Field, ErrorMessage } from 'formik';
import registerSchema from '../../validationSchemas/registerSchema';
import loginSchema from 'validationSchemas/loginSchema';
import { useDispatch } from 'react-redux';

import operations from '../../redux/auth/authOperations';
import { Input, PrimaryButton } from 'components';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { useEffect } from 'react';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
};

const AuthForm = ({ value }) => {
  const dispatch = useDispatch();
  const isReg = useSelector(authSelectors.getIsRegistered);

  useEffect(() => {
    if (!isReg) return;

    notify();
  }, [isReg]);

  const onHandleSubmit = ({ name, email, password }, { resetForm }) => {
    if (value === 0) {
      dispatch(operations.register({ name, email, password }));
      console.log({ name, email, password });
    } else {
      dispatch(operations.logIn({ email, password }));
      console.log({ email, password });
    }

    resetForm();
  };

  const placeholder =
    value === 0 ? 'Create a password' : 'Confirm your password';

  const validate = value === 0 ? registerSchema : loginSchema;

  const notify = () =>
    toast.success('🦄 Registration successful!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={onHandleSubmit}
      >
        <Form style={formStyle}>
          {value === 0 && (
            <Field
              as={Input}
              name="name"
              type="name"
              placeholder="Enter your name"
            />
          )}
          {value === 0 && (
            <ErrorMessage
              name="name"
              component="span"
              style={{ color: '#fff' }}
            />
          )}

          <Field
            as={Input}
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <ErrorMessage
            name="email"
            component="span"
            style={{ color: '#fff' }}
          />

          <Field
            as={Input}
            name="password"
            type="password"
            placeholder={placeholder}
          />
          <ErrorMessage
            name="password"
            component="span"
            style={{ color: '#fff' }}
          />

          <PrimaryButton hasIcon={false} type="submit">
            Submit
          </PrimaryButton>
        </Form>
      </Formik>

      <div>
        <button onClick={notify}>Notify!</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default AuthForm;

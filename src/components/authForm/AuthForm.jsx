import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import { popUpInitialValues } from 'constants';

import { authSchema } from 'helpers/validationSchemas';
import { useAuth } from 'hooks';

import { GoogleAuth } from 'components';
import { Input, PrimaryButton } from 'ui';

import {
  ErrorMessage,
  Form,
} from '../../assets/styles/commonFormStyles.styled';

const { authValues } = popUpInitialValues;

const AuthForm = ({ value, chgForm }) => {
  const { signIn, signUp } = useAuth();

  useEffect(() => {
    const { name, email, password } = authValues;

    async function breakFormikInputs() {
      await setValues({
        name,
        email,
        password,
      });
    }
    async function breakFormikTouched() {
      await setTouched({
        name: false,
        email: false,
        password: false,
      });
    }

    breakFormikInputs();
    breakFormikTouched();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chgForm]);

  const onHandleSubmit = async ({ name, email, password }, { resetForm }) => {
    try {
      if (value === 0) {
        const data = await signUp({ name, email, password });

        if (data.payload === 'Request failed with status code 409') {
          toast.error('User with this email already exists');
          return;
        }

        await signIn({ email, password });
        toast.success('Welcome to TaskPro!');
      } else {
        await signIn({ email, password });
      }

      resetForm();
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.error('User already exists:', error.message);
        toast.error('User with this email already exists');
      } else {
        console.error('An error occurred:', error.message);
        // Handle other errors here
      }
    }
  };

  const formDistributor = {
    passText: value === 0 ? 'Create a password' : 'Confirm your password',
    buttText: value === 0 ? 'Register Now' : 'Log in Now',
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setValues,
    setTouched,
  } = useFormik({
    initialValues: authValues,
    onSubmit: onHandleSubmit,
    validationSchema: authSchema,
  });

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {value === 0 && (
          <Input
            name="name"
            type="name"
            placeholder="Enter your name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        )}
        {value === 0 && errors.name && touched.name ? (
          <ErrorMessage variant="authForm">{errors.name}</ErrorMessage>
        ) : null}

        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email ? (
          <ErrorMessage variant="authForm">{errors.email}</ErrorMessage>
        ) : null}

        <Input
          name="password"
          type="password"
          placeholder={formDistributor.passText}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password ? (
          <ErrorMessage variant="authForm">{errors.password}</ErrorMessage>
        ) : null}

        <PrimaryButton
          style={{ marginTop: '14px' }}
          type="submit"
          aria-label="authorisation-button"
        >
          {formDistributor.buttText}
        </PrimaryButton>
      </Form>
      <GoogleAuth />
    </>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  value: PropTypes.number.isRequired,
  chgForm: PropTypes.number.isRequired,
};

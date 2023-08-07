import { useFormik } from 'formik';
import authSchema from '../../validationSchemas/authSchema';

import { Input, PrimaryButton } from 'components';

import { useEffect } from 'react';
import { useAuth } from 'hooks';

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

const AuthForm = ({ value, chgForm }) => {
  const { signUp, signIn } = useAuth();

  useEffect(() => {
    async function breakFormikInputs() {
      await setValues({
        name: initialValues.name,
        email: initialValues.email,
        password: initialValues.password,
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
    if (value === 0) {

      await dispatch(operations.register({ name, email, password }));
      await dispatch(operations.logIn({ email, password }));
    } else {
      await dispatch(operations.logIn({ email, password }));

    }

    resetForm();
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
    initialValues: initialValues,
    onSubmit: onHandleSubmit,
    validationSchema: authSchema,
  });

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
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
        <span style={{ color: 'white' }}>{errors.name}</span>
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
        <span style={{ color: 'white' }}>{errors.email}</span>
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
        <span style={{ color: 'white' }}>{errors.password}</span>
      ) : null}

      <PrimaryButton
        style={{ marginTop: '14px' }}
        hasIcon={false}
        type="submit"
      >
        {formDistributor.buttText}
      </PrimaryButton>
    </form>
  );
};

export default AuthForm;

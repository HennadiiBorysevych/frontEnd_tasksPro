import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useAuth } from 'hooks';
import {
  emailSendSchema,
  passwordSchema,
} from 'validationSchemas/passwordSchema';

import { Input, PrimaryButton } from 'components';
import { Background, Container } from './styles/commonStyles';
import { PasswordContainer } from './styles/passwordPage';

const initialValues = {
  email: '',
  password: '',
  verifyPassword: '',
};

const PasswordPage = () => {
  const [passwordToken, setPasswordToken] = useState(false);

  useEffect(() => {
    const rng = Math.floor(Math.random() * 11);
    setPasswordToken(rng <= 5 ? false : true);
  }, []);
  console.log('CHECK PASSWORD TOKEN', passwordToken);

  const onHandleSubmit = async (
    { email, password, verifyPassword },
    { resetForm }
  ) => {
    try {
      if (email !== '') {
        console.log(`send email to server`);
        console.log(`ONE`);
      }

      if (password !== verifyPassword) {
        alert('Password do not match');
        console.log(`TWO`);

        return;
      }

      if (password !== '' && verifyPassword !== '') {
        console.log(`send new password to server`);
        console.log(`THREE`);
      }

      resetForm();
    } catch (error) {
      //  if (error.response && error.response.status === 409) {
      //     console.error('User already exists:', error.message);
      //     // Handle the 409 error (user already exists) here
      //    } else {
      //     console.error('An error occurred:', error.message);
      //     // Handle other errors here
      //   }
    }
  };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      onSubmit: onHandleSubmit,
      validationSchema: !passwordToken ? emailSendSchema : passwordSchema,
    });

  return (
    <Background>
      <Container>
        <PasswordContainer>
          <form onSubmit={handleSubmit}>
            {!passwordToken ? (
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            ) : null}
            {!passwordToken && errors.email && touched.email ? (
              <span>{errors.email}</span>
            ) : null}

            {passwordToken ? (
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            ) : null}
            {passwordToken && errors.password && touched.password ? (
              <span style={{ color: 'white' }}>{errors.password}</span>
            ) : null}

            {passwordToken ? (
              <Input
                name="verifyPassword"
                type="password"
                placeholder="Confirm your password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.verifyPassword}
              />
            ) : null}
            {passwordToken &&
            errors.verifyPassword &&
            touched.verifyPassword ? (
              <span style={{ color: 'white' }}>{errors.verifyPassword}</span>
            ) : null}

            <PrimaryButton
              style={{ marginTop: '14px' }}
              hasIcon={false}
              type="submit"
            >
              Send email
            </PrimaryButton>
          </form>
        </PasswordContainer>
      </Container>
    </Background>
  );
};

export default PasswordPage;

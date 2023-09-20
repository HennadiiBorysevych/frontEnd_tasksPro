import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { authOperations } from 'redux/auth';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { changePasswordSchema, sendEmailSchema } from 'helpers';
import { useAuthCollector } from 'hooks';

import { Input, PopUpTitle, PrimaryButton } from 'ui';
import {
  ErrorMessage,
  Form,
  InputItem,
  InputList,
} from 'ui/commonPopUp/commonPopUp.styled';

import { Background, Container } from './styles/commonStyles.styled';
import { PasswordContainer } from './styles/passwordPage.styled';

const { recoveryPasswordValues } = POP_UP_INITIAL_VALUES;

const PasswordPage = () => {
  const { passwordRecovery, setNewPassword } = useAuthCollector();
  const [passwordToken, setPasswordToken] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const param = searchParams.get('token');

    if (param) {
      setPasswordToken(true);
      authOperations.token.set(param);
      return;
    }

    setPasswordToken(false);
  }, [searchParams]);

  const onHandleSubmit = async (
    { email, password, verifyPassword },
    { resetForm }
  ) => {
    try {
      if (email !== '') {
        const response = passwordRecovery({ email });
        if (response.abort) {
          toast.error(`A user with this email ${email} does not find`);
        } else {
          toast.success(
            'Your request has been sent. Check your email and follow the instructions'
          );
        }
      }

      if (password !== verifyPassword) {
        alert('Password do not match');

        return;
      }

      if (password !== '' && verifyPassword !== '') {
        setNewPassword({ passwordNew: password });

        toast.success('Your password has been changed successfully');
      }

      resetForm();
    } catch (error) {
      console.error('An error occurred:', error.message);
      // Handle other errors here
    }
  };
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: recoveryPasswordValues,
      onSubmit: onHandleSubmit,
      validationSchema: !passwordToken ? sendEmailSchema : changePasswordSchema,
    });

  return (
    <Background>
      <Container>
        <PasswordContainer>
          <PopUpTitle
            variant="Auth form"
            title={
              !passwordToken ? 'Password recovery' : 'Change your password'
            }
          />
          <Form onSubmit={handleSubmit}>
            <InputList>
              <InputItem>
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
                  <ErrorMessage variant="authForm">{errors.email}</ErrorMessage>
                ) : null}
              </InputItem>
              <InputItem>
                {' '}
                {passwordToken ? (
                  <Input
                    name="password"
                    type="password"
                    placeholder="Enter your new password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                ) : null}
                {passwordToken && errors.password && touched.password ? (
                  <ErrorMessage variant="authForm">
                    {errors.password}
                  </ErrorMessage>
                ) : null}
              </InputItem>
              <InputItem>
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
                  <ErrorMessage variant="authForm">
                    {errors.verifyPassword}
                  </ErrorMessage>
                ) : null}
              </InputItem>
            </InputList>

            <PrimaryButton
              version="formPopUp"
              id="recovery-password-submit-button"
              hasIcon={false}
              type="submit"
            >
              {!passwordToken ? 'Send email' : 'Change your password'}
            </PrimaryButton>
          </Form>
        </PasswordContainer>
      </Container>
    </Background>
  );
};

export default PasswordPage;

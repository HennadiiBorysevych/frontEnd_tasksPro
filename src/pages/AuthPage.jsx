import React, { useEffect } from 'react';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { useToggleModalAndSideBar } from 'contexts';
import { authSchema } from 'helpers';
import { useAuth } from 'hooks';

import { AuthForm } from 'components';
import { CommonPopUp } from 'ui';

import {
  AuthContainer,
  Password,
  StyledTab,
  StyledTabs,
} from './styles/authPage.styled';
import { Background, Container } from './styles/commonStyles.styled';

const { authValues } = POP_UP_INITIAL_VALUES;

const AuthPage = () => {
  const { windowHeight } = useToggleModalAndSideBar();
  const {
    value,
    formDistributor,
    handleChange,
    handleTabChange,
    onHandleSubmit,
    resetInputs,
  } = useAuth();

  const inputs = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: formDistributor.passText,
    },
  ];

  if (value === 0) {
    inputs.unshift({
      name: 'name',
      type: 'text',
      placeholder: 'Enter your name',
    });
  }

  return (
    <Background>
      <Container windowHeight={windowHeight}>
        <AuthContainer>
          <StyledTabs value={value} onChange={handleTabChange}>
            <StyledTab label="Registration" />
            <StyledTab label="Log In" />
          </StyledTabs>
          {value === 1 && (
            <Password to="/auth/forgot_password">Forgot password?</Password>
          )}
          <CommonPopUp
            destination="authForm"
            onSubmit={onHandleSubmit}
            onChange={handleChange}
            authInputsTabsReset={resetInputs}
            inputs={inputs}
            initialValues={authValues}
            validationSchema={authSchema}
            buttonText={formDistributor.buttText}
            variantMarginTop="formPopUp"
            google={true}
            variantMessage="authForm"
            id="register-or-login-button"
          />
          {/* <AuthForm value={value} chgForm={resetForm} /> */}
        </AuthContainer>
      </Container>
    </Background>
  );
};

export default AuthPage;

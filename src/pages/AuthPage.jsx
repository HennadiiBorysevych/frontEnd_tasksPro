import React from 'react';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { useToggleModalAndSideBar } from 'contexts';
import { authSchema } from 'helpers';
import { useAuth } from 'hooks';

import { CommonForm } from 'components';
import { Typography } from 'ui';

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
    inputs,
    tabPosition,
    resetInputs,
    formDistributor,
    handleChange,
    handleTabChange,
    onHandleSubmit,
  } = useAuth();

  return (
    <Background>
      <Container windowHeight={windowHeight}>
        <AuthContainer>
          <StyledTabs value={tabPosition} onChange={handleTabChange}>
            <StyledTab label="Registration" />
            <StyledTab label="Log In" />
          </StyledTabs>
          {tabPosition === 1 && (
            <Password to="/auth/forgot_password">
              <Typography variant="passwordForgot">Forgot password?</Typography>
            </Password>
          )}

          <CommonForm
            onSubmit={onHandleSubmit}
            onChange={e => {
              handleChange(e.target.value);
            }}
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
        </AuthContainer>
      </Container>
    </Background>
  );
};

export default AuthPage;

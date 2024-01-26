import React, { useEffect } from 'react';
import { useAuthRedux, useBoardsRedux } from 'redux/services';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { useToggleModalAndSideBar } from 'contexts';
import { authSchema } from 'helpers';
import { useAuth } from 'hooks';

import { CommonForm, SkeletonLoader } from 'components';
import { Typography } from 'ui';

import * as styles from './styles/authPage.styled';
import * as commonStyles from './styles/commonStyles.styled';

const { authValues } = POP_UP_INITIAL_VALUES;

const AuthPage = () => {
  const { windowHeight } = useToggleModalAndSideBar();
  const { resetBoardsState } = useBoardsRedux();
  const { isFetchingCurrent } = useAuthRedux();
  const {
    inputs,
    tabPosition,
    resetInputs,
    formDistributor,
    handleChange,
    handleTabChange,
    onHandleSubmit,
  } = useAuth();

  useEffect(() => {
    resetBoardsState();
  }, [resetBoardsState]);

  return isFetchingCurrent ? (
    <SkeletonLoader
      page={tabPosition === 0 ? '/auth/register' : '/auth/login'}
    />
  ) : (
    <commonStyles.Background>
      <commonStyles.Container windowHeight={windowHeight}>
        <styles.AuthContainer>
          <styles.StyledTabs value={tabPosition} onChange={handleTabChange}>
            <styles.StyledTab label="Registration" />
            <styles.StyledTab label="Log In" />
          </styles.StyledTabs>
          {tabPosition === 1 && (
            <styles.Password to="/auth/forgot_password">
              <Typography variant="passwordForgot">Forgot password?</Typography>
            </styles.Password>
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
        </styles.AuthContainer>
      </commonStyles.Container>
    </commonStyles.Background>
  );
};

export default AuthPage;

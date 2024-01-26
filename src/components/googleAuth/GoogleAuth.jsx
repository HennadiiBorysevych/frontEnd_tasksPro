import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthRedux } from 'redux/services';

import { SvgIcon } from 'ui';

import * as styles from './GoogleAuth.styled';

const GoogleAuth = () => {
  const { googleAuth } = useAuthRedux();

  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  if (token) {
    googleAuth(token);
  }

  const googleAuthUrl =
    'https://backend-taskspro-public.onrender.com/api/auth/google';

  return (
    <styles.GoogleLink
      href={googleAuthUrl}
      aria-label="Continue with Google"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="google-registration-dialog"
    >
      <SvgIcon svgName="icon-google" size={20} stroke="none" />
      <styles.ButtonText variant="buttonText">
        Continue with Google
      </styles.ButtonText>
    </styles.GoogleLink>
  );
};

export default GoogleAuth;

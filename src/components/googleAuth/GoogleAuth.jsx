import React from 'react';
import { useLocation } from 'react-router-dom';

import { useAuthCollector } from 'hooks';

import { SvgIcon } from 'ui';

import { ButtonText, GoogleLink } from './GoogleAuth.styled';

const GoogleAuth = () => {
  const { googleAuth } = useAuthCollector();

  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  if (token) {
    googleAuth(token);
  }
  // useEffect(() => {
  // }, [token]);

  const googleAuthUrl =
    'https://backend-taskspro-public.onrender.com/api/auth/google';

  return (
    <GoogleLink
      href={googleAuthUrl}
      aria-label="Google реєстрація"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="google-registration-dialog"
    >
      <SvgIcon svgName="icon-google" size={20} stroke="none" />
      <ButtonText variant="buttonText">Continue with Google</ButtonText>
    </GoogleLink>
  );
};

export default GoogleAuth;

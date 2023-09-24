import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAuthCollector } from 'hooks';

import { SvgIcon } from 'ui';

import { GoogleLink } from './GoogleAuth.styled';

const GoogleAuth = () => {
  const { googleAuth } = useAuthCollector();

  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  // if (token) {
  //   localStorage.setItem('token', token);
  // }
  useEffect(() => {
    if (token) {
      googleAuth(token);
    }
  }, [googleAuth, token]);

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
      <p>Continue with Google</p>
    </GoogleLink>
  );
};

export default GoogleAuth;

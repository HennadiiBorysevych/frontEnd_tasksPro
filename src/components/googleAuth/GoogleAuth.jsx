import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';

import SvgIcon from '../svgIcon/SvgIcon';

import { GoogleLink } from './GoogleAuth.styled';

const GoogleAuth = () => {
  const { googleAuth } = useAuth();

  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  useEffect(() => {
    if (token) {
      googleAuth(token);
    }
  }, [googleAuth, token]);

  const googleAuthUrl =
    'https://backend-taskspro-public.onrender.com/api/auth/google';

  return (
    <GoogleLink href={googleAuthUrl}>
      <SvgIcon svgName="icon-google" size="24px" />
      <p>Continue with Google</p>
    </GoogleLink>
  );
};

export default GoogleAuth;

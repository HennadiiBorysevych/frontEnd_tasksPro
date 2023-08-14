import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { authOperations } from '../../redux/auth';
import SvgIcon from '../svgIcon/SvgIcon';

import { GoogleLink } from './Google.styled';

const GoogleAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = new URLSearchParams(location.search).get('token');

  useEffect(() => {
    if (token) {
      dispatch(authOperations.googleAuth(token));
    }
  }, [dispatch, token]);

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

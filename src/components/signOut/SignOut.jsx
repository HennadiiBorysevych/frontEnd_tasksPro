import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';

import { SvgIcon } from 'components';

import { ButtonSignOut, TextSignOut } from './SignOut.styled';

const SignOut = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/welcome');
  };

  return (
    <>
      <ButtonSignOut type="button" onClick={handleSignOut}>
        <SvgIcon svgName="icon-login" size={32} variant="logOut" />
        <TextSignOut>Log out</TextSignOut>
      </ButtonSignOut>
    </>
  );
};

export default SignOut;

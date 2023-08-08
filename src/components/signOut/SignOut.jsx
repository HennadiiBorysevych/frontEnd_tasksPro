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
    navigate('/');
  };

  return (
    <>
      <ButtonSignOut type="button" onClick={handleSignOut}>
        <SvgIcon svgName="icon-login" size={32} stroke="#bedbb0" />
        <TextSignOut>Log out</TextSignOut>
      </ButtonSignOut>
    </>
  );
};

export default SignOut;

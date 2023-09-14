import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthCollector } from 'hooks';

import { SvgIcon } from 'ui';

import { ButtonSignOut, TextSignOut } from './SignOut.styled';

const SignOut = () => {
  const { signOut } = useAuthCollector();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/welcome');
  };

  return (
    <>
      <ButtonSignOut id="sign-out-button" type="button" onClick={handleSignOut}>
        <SvgIcon svgName="icon-login" size={32} variant="logOut" />
        <TextSignOut>Log out</TextSignOut>
      </ButtonSignOut>
    </>
  );
};

export default SignOut;

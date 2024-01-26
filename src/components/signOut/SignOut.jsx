import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthRedux } from 'redux/services';

import { SvgIcon } from 'ui';

import * as styles from './SignOut.styled';

const SignOut = () => {
  const { signOut } = useAuthRedux();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth/login');
  };

  return (
    <>
      <styles.ButtonSignOut
        id="sign-out-button"
        type="button"
        onClick={handleSignOut}
      >
        <SvgIcon svgName="icon-login" size={32} variantIcon="logOut" />
        <styles.TextSignOut variant="signOut">Log out</styles.TextSignOut>
      </styles.ButtonSignOut>
    </>
  );
};

export default SignOut;

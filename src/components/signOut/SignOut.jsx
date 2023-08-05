import { SvgIcon } from 'components';
import React from 'react';
import { ButtonSignOut, TextSignOut } from './SignOut.styled';
import { useAuth } from 'hooks';

const SignOut = () => {
  const { signOut } = useAuth();

  return (
    <>
      <ButtonSignOut type="submit" onClick={() => signOut()}>
        {/* <ButtonSignOut type="submit"> */}
        <SvgIcon svgName="icon-login" size={32} stroke="#bedbb0" />{' '}
        <TextSignOut>Log out</TextSignOut>
      </ButtonSignOut>
    </>
  );
};

export default SignOut;

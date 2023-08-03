import React from 'react';
import { useSelector } from 'react-redux';

import { UserAvatar } from 'components';

import { Container, UserName } from './Profile.styled';
import { authSelectors } from 'redux/auth';

const Profile = () => {
  const user = useSelector(authSelectors.getUser);

  return (
    <Container>
      <UserName>{user?.name ?? 'No User'}</UserName>

      <UserAvatar avatar={user?.avatarURL} width="32px" height="32px" />
    </Container>
  );
};

export default Profile;

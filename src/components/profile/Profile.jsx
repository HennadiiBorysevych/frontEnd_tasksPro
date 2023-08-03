import React from 'react';

import UserAvatar from 'components/UserAvatar/UserAvatar';

import { Container, UserName } from './Profile.styled';

const Profile = ({ user }) => {
  return (
    <Container>
      <UserName>{user?.name ?? 'No User'}</UserName>
      <UserAvatar avatar={user?.avatar} width="32px" height="32px" />
    </Container>
  );
};

export default Profile;

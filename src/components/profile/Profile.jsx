import React from 'react';
import { useSelector } from 'react-redux';

import { UserAvatar, ProfilePopUp, Modal } from 'components';

import { useModal } from 'hooks';

import { authSelectors } from 'redux/auth';

import { Container, UserName } from './Profile.styled';

const Profile = () => {
  const user = useSelector(authSelectors.selectUser);
  const { isModal, toggleModal, onBackdropClick } = useModal();

  return (
    <Container onClick={toggleModal}>
      <UserName>{user?.name ?? 'No User'}</UserName>
      <UserAvatar avatar={user?.avatarURL} width="32px" height="32px" />

      {isModal ? (
        <Modal onBackdropClick={onBackdropClick}>
          <ProfilePopUp user={user} handleModalClose={toggleModal} />
        </Modal>
      ) : null}
    </Container>
  );
};

export default Profile;

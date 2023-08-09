import React from 'react';
import { useSelector } from 'react-redux';
import { useModal } from 'hooks';
import { authSelectors } from 'redux/auth';

import { Modal, ProfilePopUp, UserAvatar, CardPopUp } from 'components';

import { ClickWrap, Container, UserName } from './Profile.styled';

const Profile = () => {
  const user = useSelector(authSelectors.selectUser);
  const { isModal, toggleModal, onBackdropClick } = useModal();

  return (
    <Container>
      <ClickWrap onClick={toggleModal}>
        <UserName>{user?.name ?? 'No User'}</UserName>
        <UserAvatar avatar={user?.avatarURL} width="32px" height="32px" />
      </ClickWrap>

      {isModal ? (
        <Modal onBackdropClick={onBackdropClick}>
          <CardPopUp
            card={null}
            handleModalClose={toggleModal}
            // card={{}}
          />
          {/* <ProfilePopUp user={user} handleModalClose={toggleModal} /> */}
        </Modal>
      ) : null}
    </Container>
  );
};

export default Profile;

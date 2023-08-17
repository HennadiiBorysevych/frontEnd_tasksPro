import React from 'react';
import { useAuth, useModal } from 'hooks';

import { Modal, ProfilePopUp, UserAvatar } from 'components';
import Typography from 'components/typography/Typography';

import { ClickWrap } from './Profile.styled';

const Profile = () => {
  const { user } = useAuth();
  const { isModal, toggleModal, onBackdropClick } = useModal();

  return (
    <div>
      <ClickWrap onClick={toggleModal}>
        <Typography variant="columnTitle">{user?.name ?? 'No User'}</Typography>
        <UserAvatar avatar={user?.avatarURL} width="32px" height="32px" />
      </ClickWrap>
      {isModal ? (
        <Modal onBackdropClick={onBackdropClick}>
          <ProfilePopUp user={user} handleModalClose={toggleModal} />
        </Modal>
      ) : null}
    </div>
  );
};

export default Profile;

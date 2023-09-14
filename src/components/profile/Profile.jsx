import React from 'react';

import { useAuthCollector, useModal } from 'hooks';

import { Modal } from 'ui';

import ProfilePopUp from '../profilePopUp/ProfilePopUp';
import UserAvatar from '../userAvatar/UserAvatar';

import { ClickWrap, UserAvatarWrapper, UserName } from './Profile.styled';

const Profile = () => {
  const { user } = useAuthCollector();
  const { isModal, toggleModal, onBackdropClick } = useModal();

  return (
    <div>
      <ClickWrap onClick={toggleModal}>
        <UserName variant="columnTitle">{user?.name ?? 'No User'}</UserName>
        <UserAvatarWrapper>
          <UserAvatar avatar={user?.avatarURL} profile="true" />
        </UserAvatarWrapper>
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

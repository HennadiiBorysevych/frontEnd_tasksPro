import React from 'react';
import { useAuthRedux } from 'redux/services';

import { useModal } from 'hooks';

import { Modal } from 'ui';

import ProfilePopUp from '../profilePopUp/ProfilePopUp';
import UserAvatar from '../userAvatar/UserAvatar';

import * as styles from './Profile.styled';

const Profile = () => {
  const { user } = useAuthRedux();
  const { isModal, toggleModal, onBackdropClick } = useModal();

  return (
    <div>
      <styles.ProfileWrap
        aria-label="Open modal for editing user profile"
        onClick={toggleModal}
      >
        <styles.UserName variant="buttonPopUpAndDropdownText">
          {user?.name ?? 'No User'}
        </styles.UserName>
        <styles.UserAvatarWrapper>
          <UserAvatar avatar={user?.avatarURL} profile="true" />
        </styles.UserAvatarWrapper>
      </styles.ProfileWrap>
      {isModal ? (
        <Modal onBackdropClick={onBackdropClick}>
          <ProfilePopUp user={user} handleModalClose={toggleModal} />
        </Modal>
      ) : null}
    </div>
  );
};

export default Profile;

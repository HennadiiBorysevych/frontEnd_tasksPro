import React from 'react';
import PropTypes from 'prop-types';

import { UserAvatar, PopUpLayout, ButtonPlus, PrimaryButton } from 'components';

import { useEditProfile } from 'hooks';

import {
  Container,
  AvatarWrap,
  AddButtonWrap,
  Input,
  AvatarBg,
} from './ProfilePopUp.styled.js';

const ProfilePopUp = ({
  user,
  handleAddAvatar,
  handleEditProfile,
  handleModalClose,
}) => {
  const { editedUser, userAvatar, handleChangeProfile, handleUserAvatar } =
    useEditProfile(user);
  return (
    <Container>
      <PopUpLayout title="Edit profile" handleClose={handleModalClose}>
        <AvatarWrap>
          <Input type="file" id="avatar" background={userAvatar} />
          <AvatarBg size="68"></AvatarBg>
          <UserAvatar avatar={user?.avatarURL} />
          <AddButtonWrap>
            <ButtonPlus svgName="icon-plus" width={24} height={24} />
          </AddButtonWrap>
        </AvatarWrap>
        <input
          id="name"
          value={editedUser?.name}
          onChange={handleChangeProfile}
        />
        <input
          id="email"
          value={editedUser?.email}
          onChange={handleChangeProfile}
        />
        <input
          id="password"
          value={editedUser?.password}
          onChange={handleChangeProfile}
        />
        <PrimaryButton
          onClick={() => {
            console.log(editedUser);
          }}
          hasIcon={false}
        >
          Send
        </PrimaryButton>
      </PopUpLayout>
    </Container>
  );
};

ProfilePopUp.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  handleAddAvatar: PropTypes.func.isRequired,
  handleEditProfile: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
};

export default ProfilePopUp;

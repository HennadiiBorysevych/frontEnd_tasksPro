import React from 'react';
import PropTypes from 'prop-types';

import PopUpLayout from 'components/PopUp/PopUpLayout/PopUpLayout';

import { UserAvatar } from 'components';

import { Container, AvatarWrap, AddButtonWrap } from './ProfilePopUp.styled';

const ProfilePopUp = ({
  user,
  handleAddAvatar,
  handleEditProfile,
  handleModalClose,
}) => {
  return (
    <Container>
      <PopUpLayout title="Edit profile" handleClose={handleModalClose}>
        <AvatarWrap>
          <UserAvatar avatar={null} />
          <AddButtonWrap></AddButtonWrap>
        </AvatarWrap>
        <input value={user?.name} />
        <input value={user?.email} />
        <input value={user?.password} />
        <button onClick={handleEditProfile}>Send</button>
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

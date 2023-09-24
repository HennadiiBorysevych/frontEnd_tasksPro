import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { updateUserSchema } from 'helpers';
import { useEditProfile } from 'hooks';

import { ButtonPlus, CommonPopUp } from 'ui';

import UserAvatar from '../userAvatar/UserAvatar';

import {
  AddButtonWrap,
  AvatarBg,
  AvatarInput,
  AvatarWrap,
} from './ProfilePopUp.styled';

const { updateProfileValues } = POP_UP_INITIAL_VALUES;

const ProfilePopUp = ({ user, handleModalClose }) => {
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const { userAvatar, handleChangeProfile, handleUserAvatar } = useEditProfile(
    user,
    handleModalClose
  );

  const handleRequiredFieldChange = e => {
    const { name } = e.target;
    if (name === 'email' || name === 'newPassword' || name === 'password') {
      setShowPasswordConfirm(true);
    } else {
      setShowPasswordConfirm(false);
    }
  };

  const inputs = [
    {
      name: 'name',
      type: 'text',
      placeholder: user?.name,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: user?.email,
    },
    {
      name: 'newPassword',
      type: 'password',
      placeholder: 'Enter new password',
    },
  ];

  if (showPasswordConfirm) {
    inputs.push({
      name: 'password',
      type: 'password',
      placeholder: 'Enter your current password for confirmation',
    });
  }

  return (
    <CommonPopUp
      title="Edit profile"
      onClose={handleModalClose}
      onSubmit={handleChangeProfile}
      onChange={handleRequiredFieldChange}
      inputs={inputs}
      initialValues={updateProfileValues}
      validationSchema={updateUserSchema}
      buttonText="Send"
      variantMarginTop="formPopUp"
      id="send-user-updated-data"
      avatar={true}
    >
      <AvatarWrap avatar={true}>
        <AvatarInput
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
          background={userAvatar}
          onChange={handleUserAvatar}
        />
        {userAvatar ? (
          <UserAvatar avatar={userAvatar} />
        ) : (
          <AvatarBg size="68" />
        )}
        <AddButtonWrap>
          <ButtonPlus
            variantIcon="addAvatar"
            width={24}
            height={24}
            size={10}
          />
        </AddButtonWrap>
      </AvatarWrap>
    </CommonPopUp>
  );
};

ProfilePopUp.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  handleModalClose: PropTypes.func.isRequired,
};

export default ProfilePopUp;

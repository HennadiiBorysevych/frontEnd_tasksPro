import React from 'react';

import { POP_UP_INITIAL_VALUES } from 'constants';

import { updateUserSchema } from 'helpers';
import { useEditProfile } from 'hooks';

import { ButtonPlus, CommonPopUp } from 'ui';

import UserAvatar from '../userAvatar/UserAvatar';

import ProfilePopUpPropTypes from './propTypes';

import * as styles from './ProfilePopUp.styled';

const { updateProfileValues } = POP_UP_INITIAL_VALUES;

const ProfilePopUp = ({ user, handleModalClose }) => {
  const {
    inputs,
    userAvatar,
    handleRequiredFieldChange,
    handleChangeProfile,
    handleUserAvatar,
  } = useEditProfile(user, handleModalClose);

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
      <styles.AvatarWrap avatar={true}>
        <styles.AvatarInput
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
          <styles.AvatarBg size="68" />
        )}
        <styles.AddButtonWrap>
          <ButtonPlus
            variantIcon="addAvatar"
            width={24}
            height={24}
            size={10}
          />
        </styles.AddButtonWrap>
      </styles.AvatarWrap>
    </CommonPopUp>
  );
};

export default ProfilePopUp;

ProfilePopUp.propTypes = ProfilePopUpPropTypes;

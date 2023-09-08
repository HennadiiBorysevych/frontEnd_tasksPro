import { useState } from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import { popUpInitialValues } from 'constants';

import { userUpdateSchema } from 'helpers/validationSchemas';
import { useEditProfile } from 'hooks';

import { Input, PopUpLayout, PrimaryButton, SvgIcon } from 'ui';

import UserAvatar from '../userAvatar/UserAvatar';

import {
  ErrorMessage,
  Form,
} from '../../assets/styles/commonFormStyles.styled';
import {
  AddButtonWrap,
  AvatarBg,
  AvatarInput,
  AvatarWrap,
} from './ProfilePopUp.styled';

const { updateProfileValues } = popUpInitialValues;

const ProfilePopUp = ({ user, handleModalClose }) => {
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const { userAvatar, isAvatarLoad, handleChangeProfile, handleUserAvatar } =
    useEditProfile(user, handleModalClose);

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: updateProfileValues,
    onSubmit: handleChangeProfile,
    validationSchema: userUpdateSchema,
  });

  const handleRequiredFieldChange = e => {
    const { name } = e.target;
    if (name === 'email' || name === 'newPassword') {
      setShowPasswordConfirm(true);
    } else {
      setShowPasswordConfirm(false);
    }
    handleChange(e);
  };

  return (
    <PopUpLayout title="Edit profile" handleClose={handleModalClose}>
      <Form onSubmit={handleSubmit}>
        <AvatarWrap>
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
            <SvgIcon svgName="icon-plus" />
          </AddButtonWrap>
        </AvatarWrap>
        <Input
          name="name"
          type="name"
          placeholder={user?.name}
          onChange={event => handleRequiredFieldChange(event)}
          value={values.name}
        />

        {errors.name && touched.name ? (
          <ErrorMessage style={{ color: 'black' }}>{errors.name}</ErrorMessage>
        ) : null}

        <Input
          name="email"
          type="email"
          placeholder={user?.email}
          onChange={event => handleRequiredFieldChange(event)}
          value={values.email}
        />
        {errors.email && touched.email ? (
          <ErrorMessage style={{ color: 'black' }}>{errors.email}</ErrorMessage>
        ) : null}

        <Input
          name="newPassword"
          type="password"
          placeholder="Enter new password"
          onChange={event => handleRequiredFieldChange(event)}
          value={values.newPassword}
        />
        {errors.newPassword && touched.newPassword ? (
          <ErrorMessage style={{ color: 'black' }}>
            {errors.newPassword}
          </ErrorMessage>
        ) : null}

        {showPasswordConfirm && (
          <>
            <Input
              name="password"
              type="password"
              placeholder="Enter your current password for confirmation"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && touched.password ? (
              <ErrorMessage style={{ color: 'black' }}>
                {errors.password}
              </ErrorMessage>
            ) : null}
          </>
        )}

        <PrimaryButton
          id="send-user-updated-data"
          disabled={
            !isAvatarLoad &&
            !values.name &&
            !values.email &&
            !values.password &&
            !values.newPassword
          }
          style={{ marginTop: '10px' }} //---?------------------
          type="submit"
        >
          Send
        </PrimaryButton>
      </Form>
    </PopUpLayout>
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

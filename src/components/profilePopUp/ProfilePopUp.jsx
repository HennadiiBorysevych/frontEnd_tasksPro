import { useState } from 'react';
import { useFormik } from 'formik';
import { useAuth, useEditProfile } from 'hooks';
import PropTypes from 'prop-types';
import { userUpdateSchema } from 'validationSchemas/';

import {
  Input,
  PopUpLayout,
  PrimaryButton,
  SvgIcon,
  UserAvatar,
} from 'components';

import {
  AddButtonWrap,
  AvatarBg,
  AvatarInput,
  AvatarWrap,
  Container,
} from './ProfilePopUp.styled.js';

const initialValues = {
  name: '',
  email: '',
  newPassword: '',
  password: '',
};
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
};

const ProfilePopUp = ({ user, handleModalClose }) => {
  const { signOut } = useAuth();
  const [isNewPasswordInputFocused, setIsNewPasswordInputFocused] =
    useState(false);
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const { userAvatar, isAvatarLoad, handleChangeProfile, handleUserAvatar } =
    useEditProfile(user);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      onSubmit: handleChangeProfile,
      validationSchema: userUpdateSchema,
    });

  const handleModalSubmit = e => {
    e.preventDefault();
    handleSubmit();
    handleModalClose();

    if (
      (values.email !== user.email && values.email !== '') ||
      (values.newPassword && values.newPassword !== '')
    ) {
      console.log(values.email);
      console.log(user.email);
      console.log(values.newPassword);
      signOut();
    }
  };

  return (
    <Container>
      <PopUpLayout title="Edit profile" handleClose={handleModalClose}>
        <form style={formStyle} onSubmit={handleModalSubmit}>
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
              <SvgIcon svgName="icon-plus" variant="header" />
            </AddButtonWrap>
          </AvatarWrap>
          <Input
            name="name"
            type="name"
            placeholder={user?.name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />

          {errors.name && touched.name ? (
            <span style={{ color: 'black' }}>{errors.name}</span>
          ) : null}

          <Input
            name="email"
            type="email"
            placeholder={user?.email}
            onChange={handleChange}
            onBlur={e => handleBlur(e)}
            onFocus={() => {
              setIsEmailInputFocused(true);
              setIsNewPasswordInputFocused(false);
            }}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <span style={{ color: 'black' }}>{errors.email}</span>
          ) : null}

          <Input
            name="newPassword"
            type="password"
            placeholder="Enter new password"
            onChange={handleChange}
            onBlur={e => handleBlur(e)}
            onFocus={() => {
              setIsEmailInputFocused(false);
              setIsNewPasswordInputFocused(true);
            }}
            value={values.newPassword}
          />
          {errors.newPassword && touched.newPassword ? (
            <span style={{ color: 'black' }}>{errors.newPassword}</span>
          ) : null}

          {(isNewPasswordInputFocused ||
            isEmailInputFocused ||
            values.email ||
            values.newPassword) && (
            <>
              <Input
                name="password"
                type="password"
                placeholder="Enter your current password for confirmation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <span style={{ color: 'black' }}>{errors.password}</span>
              ) : null}
            </>
          )}

          <PrimaryButton
            disabled={
              !isAvatarLoad &&
              !values.name &&
              !values.email &&
              !values.password &&
              !values.newPassword
            }
            style={{ marginTop: '10px' }}
            hasIcon={false}
            type="submit"
          >
            Send
          </PrimaryButton>
        </form>
      </PopUpLayout>
    </Container>
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

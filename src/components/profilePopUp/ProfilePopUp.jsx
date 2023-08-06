import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import userUpdateSchema from '../../validationSchemas/userUpdateSchema';

import { UserAvatar, PopUpLayout, SvgIcon, PrimaryButton } from 'components';

import { useEditProfile } from 'hooks';

import {
  Container,
  AvatarWrap,
  AddButtonWrap,
  AvatarInput,
  Input,
  AvatarBg,
  TogglePasswordBtn,
} from './ProfilePopUp.styled.js';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
};

const ProfilePopUp = ({ user, handleModalClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { userAvatar, handleChangeProfile, handleUserAvatar } =
    useEditProfile(user);

  return (
    <Container>
      <PopUpLayout title="Edit profile" handleClose={handleModalClose}>
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
            <SvgIcon svgName="icon-plus" stroke="#000" />
          </AddButtonWrap>
        </AvatarWrap>

        <Formik
          initialValues={{ name: user?.name, email: user?.email, password: '' }}
          validationSchema={userUpdateSchema}
          onSubmit={values => {
            handleChangeProfile(values);
          }}
        >
          <Form style={formStyle}>
            <Field
              as={Input}
              name="name"
              type="name"
              placeholder="Enter your name"
            />
            <ErrorMessage
              name="name"
              component="span"
              style={{ color: 'rgba(255,255,255,.8)', fontSize: '12px' }}
            />

            <Field
              as={Input}
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="span"
              style={{ color: 'rgba(255,255,255,.6)', fontSize: '12px' }}
            />

            <div style={{ position: 'relative' }}>
              <Field
                as={Input}
                name="password"
                type={showPassword ? 'text' : 'password'}
                // type="password"
                placeholder="Enter new password"
              />
              <ErrorMessage
                name="password"
                component="span"
                style={{ color: 'rgba(255,255,255,.6)', fontSize: '12px' }}
              />
              <TogglePasswordBtn
                onClick={() => {
                  setShowPassword(prev => !prev);
                }}
              >
                <SvgIcon
                  svgName={showPassword ? 'icon-eye' : 'icon-eye-close'}
                  size="18"
                  fill="#FFF"
                />
              </TogglePasswordBtn>
            </div>

            <PrimaryButton type="submit" hasIcon={false}>
              Send
            </PrimaryButton>
          </Form>
        </Formik>
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

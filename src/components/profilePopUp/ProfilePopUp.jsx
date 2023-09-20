import { useState } from 'react';
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

  // const { handleChange, handleSubmit, values, errors, touched } = useFormik({
  //   initialValues: updateProfileValues,
  //   onSubmit: handleChangeProfile,
  //   validationSchema: userUpdateSchema,
  // });

  const handleRequiredFieldChange = e => {
    const { name } = e.target;
    if (name === 'email' || name === 'newPassword' || name === 'password') {
      setShowPasswordConfirm(true);
    } else {
      setShowPasswordConfirm(false);
    }
    // handleChange(e);
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
      version="formPopUp"
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
          <ButtonPlus variant="addAvatar" width={24} height={24} size={10} />
        </AddButtonWrap>
      </AvatarWrap>
    </CommonPopUp>
    // <PopUpLayout title="Edit profile" handleClose={handleModalClose}>
    //   <Form onSubmit={handleSubmit}>
    //     <AvatarWrap avatar={userAvatar}>
    //       <AvatarInput
    //         type="file"
    //         id="avatar"
    //         name="avatar"
    //         accept="image/png, image/jpeg"
    //         background={userAvatar}
    //         onChange={handleUserAvatar}
    //       />
    //       {userAvatar ? (
    //         <UserAvatar avatar={userAvatar} />
    //       ) : (
    //         <AvatarBg size="68" />
    //       )}
    //       <AddButtonWrap>
    //         <ButtonPlus variant="sidemenu" width={24} height={24} size={10} />
    //       </AddButtonWrap>
    //     </AvatarWrap>
    //     <ul>
    //       <InputItem>
    //         <Input
    //           name="name"
    //           type="name"
    //           placeholder={user?.name}
    //           onChange={event => handleRequiredFieldChange(event)}
    //           value={values.name}
    //         />

    //         {errors.name && touched.name ? (
    //           <ErrorMessage>{errors.name}</ErrorMessage>
    //         ) : null}
    //       </InputItem>

    //       <InputItem>
    //         <Input
    //           name="email"
    //           type="email"
    //           placeholder={user?.email}
    //           onChange={event => handleRequiredFieldChange(event)}
    //           value={values.email}
    //         />
    //         {errors.email && touched.email ? (
    //           <ErrorMessage>{errors.email}</ErrorMessage>
    //         ) : null}
    //       </InputItem>

    //       <InputItem>
    //         <Input
    //           name="newPassword"
    //           type="password"
    //           placeholder="Enter new password"
    //           onChange={event => handleRequiredFieldChange(event)}
    //           value={values.newPassword}
    //         />
    //         {errors.newPassword && touched.newPassword ? (
    //           <ErrorMessage>{errors.newPassword}</ErrorMessage>
    //         ) : null}
    //       </InputItem>

    //       <InputItem>
    //         {showPasswordConfirm && (
    //           <>
    //             <Input
    //               name="password"
    //               type="password"
    //               placeholder="Enter your current password for confirmation"
    //               onChange={handleChange}
    //               value={values.password}
    //             />
    //             {errors.password && touched.password ? (
    //               <ErrorMessage>{errors.password}</ErrorMessage>
    //             ) : null}
    //           </>
    //         )}
    //       </InputItem>
    //     </ul>

    //     <PrimaryButton
    //       version="formPopUp"
    //       id="send-user-updated-data"
    //       disabled={
    //         !isAvatarLoad &&
    //         !values.name &&
    //         !values.email &&
    //         !values.password &&
    //         !values.newPassword
    //       }
    //       type="submit"
    //     >
    //       Send
    //     </PrimaryButton>
    //   </Form>
    // </PopUpLayout>
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

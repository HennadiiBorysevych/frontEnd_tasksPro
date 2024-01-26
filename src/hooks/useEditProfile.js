import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuthRedux } from 'redux/services';

import { generateToastMessage } from 'helpers';

const useEditProfile = (currentUser, handleModalClose) => {
  const [userAvatar, setUserAvatar] = useState(currentUser?.avatarURL ?? '');
  const [avatarFile, setAvatarFile] = useState(null);
  const [isAvatarLoad, setIsAvatarLoad] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const { updateProfileData } = useAuthRedux();

  useEffect(() => {
    avatarFile ? setIsAvatarLoad(true) : setIsAvatarLoad(false);
  }, [avatarFile]);

  const handleChangeProfile = async values => {
    let formattedValues = {};

    for (const key in values) {
      if (values[key] !== '')
        formattedValues = { ...formattedValues, [key]: values[key] };
    }
    if (!Object.keys(formattedValues).length && !isAvatarLoad) return;

    const newUser = {
      avatarFile,
      user: Object.keys(formattedValues).length ? formattedValues : null,
    };
    const keysToDisplay = Object.keys(formattedValues).filter(
      key => key !== 'password'
    );

    const toastMessage = generateToastMessage(keysToDisplay, isAvatarLoad);

    const response = await updateProfileData(newUser);

    if (
      response.payload &&
      response.payload.message === 'Update success' &&
      formattedValues
    ) {
      toast.success(toastMessage);
    }

    handleModalClose();

    // if (formattedValues.password) {
    // localStorage.clear();
    //   signOut();
    //   navigate('/auth/login');
    // }
  };

  const handleRequiredFieldChange = e => {
    const { name } = e.target;
    if (name === 'email' || name === 'newPassword' || name === 'password') {
      setShowPasswordConfirm(true);
    } else {
      setShowPasswordConfirm(false);
    }
  };

  const handleUserAvatar = e => {
    const file = e.target.files[0];
    setAvatarFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      setUserAvatar(reader.result);
    };
  };

  const inputs = [
    {
      name: 'name',
      type: 'text',
      placeholder: currentUser?.name,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: currentUser?.email,
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

  return {
    inputs,
    userAvatar,
    isAvatarLoad,
    handleChangeProfile,
    handleRequiredFieldChange,
    handleUserAvatar,
  };
};

export default useEditProfile;

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { generateToastMessage } from 'helpers';

import useAuthCollector from './useAuthCollector';

const useEditProfile = (currentUser, handleModalClose) => {
  const [userAvatar, setUserAvatar] = useState(currentUser?.avatarURL ?? '');
  const [avatarFile, setAvatarFile] = useState(null);
  const [isAvatarLoad, setIsAvatarLoad] = useState(false);
  const { updateProfileData } = useAuthCollector();

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
    localStorage.clear();
    if (
      response.payload &&
      response.payload.message === 'Update success' &&
      formattedValues
    ) {
      toast.success(toastMessage);
    }

    handleModalClose();

    // if (formattedValues.password) {
    //   signOut();
    //   console.log(user);
    //   navigate('/auth/login');
    // }
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

  return {
    userAvatar,
    isAvatarLoad,
    handleChangeProfile,
    handleUserAvatar,
  };
};

export default useEditProfile;

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import useAuth from './useAuth';

const useEditProfile = (currentUser, handleModalClose) => {
  const [userAvatar, setUserAvatar] = useState(currentUser?.avatarURL ?? '');
  const [avatarFile, setAvatarFile] = useState(null);
  const [isAvatarLoad, setIsAvatarLoad] = useState(false);
  const { updateProfileData, signOut } = useAuth();

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
    const toastMessage = `User ${keysToDisplay.join(
      ', '
    )} successfully updated`;

    console.log(formattedValues);
    const response = await updateProfileData(newUser);
    localStorage.clear();
    if (
      response.payload &&
      response.payload.message === 'Update success' &&
      formattedValues
    ) {
      console.log(response.payload.data);
      toast.success(toastMessage);
    }

    handleModalClose();

    // if (formattedValues.password) {
    //   signOut();
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

    if (reader.result) {
      toast.success('User avatar successfully updated');
    }
  };

  return {
    userAvatar,
    isAvatarLoad,
    handleChangeProfile,
    handleUserAvatar,
  };
};

export default useEditProfile;

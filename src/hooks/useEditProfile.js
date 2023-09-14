import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import useAuthCollector from './useAuthCollector';

const useEditProfile = (currentUser, handleModalClose) => {
  const [userAvatar, setUserAvatar] = useState(currentUser?.avatarURL ?? '');
  const [avatarFile, setAvatarFile] = useState(null);
  const [isAvatarLoad, setIsAvatarLoad] = useState(false);
  const { updateProfileData, signOut } = useAuthCollector();

  const navigate = useNavigate();

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

    let toastMessage = '';

    if (keysToDisplay.includes('newPassword')) {
      const updatedKeysToDisplay = keysToDisplay.map(key =>
        key === 'newPassword' ? 'password' : key
      );
      toastMessage = `User ${updatedKeysToDisplay.join(
        ', '
      )} successfully updated`;
    }

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

    if (formattedValues.password) {
      signOut();
      navigate('/auth/login');
    }
  };

  const handleUserAvatar = e => {
    const file = e.target.files[0];
    setAvatarFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      setUserAvatar(reader.result);
      if (reader.result) {
        toast.success('User avatar has successfully added');
      }
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

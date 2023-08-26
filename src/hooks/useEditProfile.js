import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import useAuth from './useAuth';

const useEditProfile = user => {
  const [userAvatar, setUserAvatar] = useState(user?.avatarURL ?? '');
  const [avatarFile, setAvatarFile] = useState(null);
  const [isAvatarLoad, setIsAvatarLoad] = useState(false);

  const { updateProfileData } = useAuth();

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

    console.log(formattedValues);

    const response = await updateProfileData(newUser);

    if (response.payload && response.payload.message === 'Update success') {
      toast.success(`User data successfully updated`);
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

  return { userAvatar, isAvatarLoad, handleChangeProfile, handleUserAvatar };
};

export default useEditProfile;

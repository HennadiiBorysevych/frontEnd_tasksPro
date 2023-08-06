import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const useEditProfile = user => {
  const [userAvatar, setUserAvatar] = useState(user?.avatarURL ?? '');
  const [avatarFile, setAvatarFile] = useState('');
  const dispatch = useDispatch();

  const handleChangeProfile = values => {
    const { password, ...rest } = values;
    const newUser =
      password === ''
        ? { user: rest, avatarFile }
        : { user: values, avatarFile };
    dispatch(authOperations.updateUserInfo(newUser));
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

  return { userAvatar, handleChangeProfile, handleUserAvatar };
};

export default useEditProfile;

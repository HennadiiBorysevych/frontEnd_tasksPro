import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const useEditProfile = user => {
  const [userAvatar, setUserAvatar] = useState(user?.avatarURL ?? '');
  const [avatarFile, setAvatarFile] = useState(null);
  const [isAvatarLoad, setIsAvatarLoad] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    avatarFile ? setIsAvatarLoad(true) : setIsAvatarLoad(false);
  }, [avatarFile]);

  const handleChangeProfile = values => {
    let formatedValues = {};
    for (const key in values) {
      if (values[key] !== '')
        formatedValues = { ...formatedValues, [key]: values[key] };
    }
    if (!Object.keys(formatedValues).length && !isAvatarLoad) return;
    const newUser = {
      avatarFile,
      user: Object.keys(formatedValues).length ? formatedValues : null,
    };

    console.log(newUser);
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

  return { userAvatar, isAvatarLoad, handleChangeProfile, handleUserAvatar };
};

export default useEditProfile;

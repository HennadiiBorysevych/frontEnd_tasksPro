import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authOperations } from 'redux/auth';
import { selectTheme } from 'redux/auth/authSelectors';

const useEditProfile = user => {
  const [userAvatar, setUserAvatar] = useState(user?.avatarURL ?? '');
  const [avatarFile, setAvatarFile] = useState(null);
  const [isAvatarLoad, setIsAvatarLoad] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    avatarFile ? setIsAvatarLoad(true) : setIsAvatarLoad(false);
  }, [avatarFile]);

  const selectedTheme = useSelector(selectTheme);
  const toastTheme = selectedTheme === 'Dark' ? 'dark' : 'light';
  const toastConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: toastTheme,
  };
  const handleChangeProfile = async values => {
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

    const response = await dispatch(authOperations.updateUserInfo(newUser));

    if (response.payload && response.payload.message === "Update success") {
      toast.success(`User data successfully updated`, toastConfig);
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

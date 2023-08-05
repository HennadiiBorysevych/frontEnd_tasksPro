import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const useEditProfile = user => {
  const [editedUser, setEditedUser] = useState({ ...user, password: '' });
  const [userAvatar, setUserAvatar] = useState(user?.avatarURL ?? '');
  const dispatch = useDispatch();

  const handleChangeProfile = e => {
    const { id, value } = e.currentTarget;
    setEditedUser(prev => ({ ...prev, [id]: value }));
  };

  const handleUserAvatar = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      setUserAvatar(reader.result);
      dispatch(authOperations.changeUserAvatar(reader.result));
    };
  };

  return { editedUser, userAvatar, handleChangeProfile, handleUserAvatar };
};

export default useEditProfile;

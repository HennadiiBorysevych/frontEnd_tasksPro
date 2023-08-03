import { useState } from 'react';

const useEditProfile = user => {
  const [editedUser, setEditedUser] = useState({ ...user, password: '' });

  const handleChangeProfile = e => {
    const { id, value } = e.currentTarget;
    setEditedUser(prev => ({ ...prev, [id]: value }));
  };

  return { editedUser, handleChangeProfile };
};

export default useEditProfile;

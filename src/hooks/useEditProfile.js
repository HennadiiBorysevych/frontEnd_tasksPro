import { useState } from 'react';

const useEditProfile = user => {
  const [editedUser, setEditedUser] = useState(user ?? null);

  const handleChangeProfile = (key, value) => {
    setEditedUser(prev => ({ ...prev, [key]: value }));
  };

  return { editedUser, handleChangeProfile };
};

export default useEditProfile;

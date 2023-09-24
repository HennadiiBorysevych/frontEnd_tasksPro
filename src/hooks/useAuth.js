import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import useAuthCollector from './useAuthCollector';

const useAuth = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [value, setValue] = useState(id === 'register' ? 0 : 1);
  const [resetForm, setResetForm] = useState(0);
  const { signIn, signUp } = useAuthCollector();

  const tabToIdx = {
    1: 'register',
    0: 'login',
  };

  const handleTabChange = (_, newVal) => {
    history(`/auth/${tabToIdx[value]}`);
    setValue(newVal);
    setResetForm(resetForm + 1);
  };

  const handleChange = async e => {
    const value = e.target.value;
    console.log(value);
  };

  const onHandleSubmit = async ({ name, email, password }) => {
    try {
      if (value === 0) {
        const data = await signUp({ name, email, password });

        if (data.payload === 'Request failed with status code 409') {
          toast.error('User with this email already exists');
          return;
        }

        await signIn({ email, password });
        toast.success('Welcome to TaskPro!');
      } else {
        const data = await signIn({ email, password });
        if (data.payload === 'Request failed with status code 401') {
          toast.error('Email or password are wrong');
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.error('User already exists:', error.message);
        toast.error('User with this email already exists');
      } else {
        console.error('An error occurred:', error.message);
        // Handle other errors here
      }
    }
  };

  const formDistributor = {
    passText: value === 0 ? 'Create a password' : 'Confirm your password',
    buttText: value === 0 ? 'Register Now' : 'Log in Now',
  };

  return {
    value,
    formDistributor,
    resetForm,
    handleChange,
    handleTabChange,
    onHandleSubmit,
  };
};

export default useAuth;

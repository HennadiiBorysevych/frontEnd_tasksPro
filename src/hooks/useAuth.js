import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthRedux } from 'redux/services';

const useAuth = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [tabPosition, setTabPosition] = useState(id === 'register' ? 0 : 1);
  const [resetInputs, setResetInputs] = useState(false);
  const { signIn, signUp } = useAuthRedux();
  const [value, setValue] = useState('');

  const tabToIdx = {
    0: 'register',
    1: 'login',
  };

  const handleTabChange = async (_, newVal) => {
    const newTabPosition = newVal === 0 ? 0 : 1;
    setTabPosition(newTabPosition);
    history(`/auth/${tabToIdx[newVal]}`);
    setValue('');
    setResetInputs(!resetInputs);
  };

  const handleChange = value => {
    setValue(value);
  };

  const onHandleSubmit = async ({ name, email, password }) => {
    try {
      if (tabPosition === 0) {
        const data = await signUp({ name, email, password });

        if (
          data.payload === 'Request failed with status code 409' ||
          (name === '' &&
            data.payload === 'Request failed with status code 400')
        ) {
          toast.error(`User with this email ${email} already exists`);
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
    passText: tabPosition === 0 ? 'Create a password' : 'Confirm your password',
    buttText: tabPosition === 0 ? 'Register Now' : 'Log in Now',
  };

  const inputs = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      value,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: formDistributor.passText,
      value,
    },
  ];

  if (tabPosition === 0) {
    inputs.unshift({
      name: 'name',
      type: 'text',
      placeholder: 'Enter your name',
      value,
    });
  }

  return {
    inputs,
    tabPosition,
    formDistributor,
    resetInputs,
    handleChange,
    handleTabChange,
    onHandleSubmit,
  };
};

export default useAuth;

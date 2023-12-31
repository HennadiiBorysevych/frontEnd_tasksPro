import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authOperations } from 'redux/auth';

import { useAuthCollector } from 'hooks';

const usePassword = () => {
  const { passwordRecovery, setNewPassword } = useAuthCollector();
  const [passwordToken, setPasswordToken] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const param = searchParams.get('token');

    if (param) {
      setPasswordToken(true);
      authOperations.token.set(param);
      return;
    }

    setPasswordToken(false);
  }, [searchParams]);

  const onHandleSubmit = async ({ email, password, verifyPassword }) => {
    try {
      if (email !== '') {
        const response = passwordRecovery({ email });
        if (response.abort) {
          toast.error(`A user with this email ${email} does not find`);
        } else {
          toast.success(
            'Your request has been sent. Check your email and follow the instructions'
          );
        }
      }

      if (password !== verifyPassword) {
        toast.error('Password do not match');

        return;
      }

      if (password !== '' && verifyPassword !== '') {
        setNewPassword({ passwordNew: password });

        toast.success('Your password has been changed successfully');
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
      // Handle other errors here
    }
  };

  const handleChange = e => {
    const value = e.target.value;
    console.log(value);
  };

  const emailInput = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
    },
  ];

  const passwordInputs = [
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter your new password',
    },
    {
      name: 'verifyPassword',
      type: 'password',
      placeholder: 'Confirm your password',
    },
  ];

  const inputs = !passwordToken ? emailInput : passwordInputs;

  return {
    inputs,
    passwordToken,
    handleChange,
    onHandleSubmit,
  };
};

export default usePassword;

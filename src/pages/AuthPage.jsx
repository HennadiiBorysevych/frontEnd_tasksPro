import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useParams, useNavigate } from 'react-router-dom';

import RegisterForm from '../components/registerForm/RegisterForm';
import LoginForm from '../components/loginForm/LoginForm';
import { useEffect } from 'react';

const AuthPage = e => {
  const { id } = useParams();
  const history = useNavigate();
  const [value, setValue] = useState(id === 'register' ? 0 : 1);
  const [cngRoute, setCngRoute] = useState(false);

  useEffect(() => {
    console.log(value);
    console.log(`/auth/${tabToIdx[value]}`);

    switch (id) {
      case 'register':
        setValue(0);
        break;
      case 'login':
        setValue(1);
        break;
      default:
        break;
    }
  }, []);

  const tabToIdx = {
    1: 'register',
    0: 'login',
  };

  const handleChange = (evt, newVal) => {
    history(`/auth/${tabToIdx[value]}`);
    setValue(newVal);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Register" />
        <Tab label="Log In" />
      </Tabs>
      {value === 0 && <RegisterForm />}
      {value === 1 && <LoginForm />}
    </>
  );
};

export default AuthPage;

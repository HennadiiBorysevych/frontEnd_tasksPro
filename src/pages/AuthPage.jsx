import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AuthForm } from 'components';

import { Background, Container } from './styles/commonStyles';

import {
  AuthContainer,
  Password,
  StyledTab,
  StyledTabs,
} from './styles/authPage.styled';

const AuthPage = e => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const { id } = useParams();
  const history = useNavigate();
  const [value, setValue] = useState(id === 'register' ? 0 : 1);
  const [resetForm, setResetForm] = useState(0);

  const updateWindowHeight = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowHeight);

    return () => {
      window.removeEventListener('resize', updateWindowHeight);
    };
  }, []);

  const tabToIdx = {
    1: 'register',
    0: 'login',
  };

  const handleChange = (evt, newVal) => {
    history(`/auth/${tabToIdx[value]}`);
    setValue(newVal);
    setResetForm(resetForm + 1);
  };

  return (
    <Background>
      <Container windowHeight={windowHeight}>
        <AuthContainer>
          <StyledTabs value={value} onChange={handleChange}>
            <StyledTab label="Registration" />
            <StyledTab label="Log In" />
          </StyledTabs>
          {value === 1 && (
            <Password to="/auth/forgot_password" style={{ color: 'white' }}>
              Forgot password?
            </Password>
          )}
          <AuthForm value={value} chgForm={resetForm} />
        </AuthContainer>
      </Container>
    </Background>
  );
};

export default AuthPage;

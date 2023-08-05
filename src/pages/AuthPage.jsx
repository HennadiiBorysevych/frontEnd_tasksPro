import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from '@emotion/styled';

import { useParams, useNavigate } from 'react-router-dom';

import { AuthForm } from 'components';

import { Background, Container, AuthContainer } from './pages.styled';

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-flexContainer': {
    display: 'flex',
    gap: '14px',
    border: 'none',
    paddingBottom: '40px',
  },
});

const StyledTab = styled(props => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    borderRadius: 'none',
    padding: '0px',
    margin: '0px',

    minWidth: '0px',
    minHeight: '0px',

    color: 'gray',
    fontFamily: ['Poppins', 'sans-serif'],
    fontSize: '18px',
    fontWeight: '500',
    fontHeight: '27px',

    '&:hover': {
      color: '#fff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: 'white',
    },
  })
);

const AuthPage = e => {
  const { id } = useParams();
  const history = useNavigate();
  const [value, setValue] = useState(id === 'register' ? 0 : 1);

  const tabToIdx = {
    1: 'register',
    0: 'login',
  };

  const handleChange = (evt, newVal) => {
    history(`/auth/${tabToIdx[value]}`);
    setValue(newVal);
  };

  return (
    <Background>
      <Container>
        <AuthContainer>
          <StyledTabs value={value} onChange={handleChange}>
            <StyledTab label="Registration" />
            <StyledTab label="Log In" />
          </StyledTabs>
          <AuthForm value={value} />
        </AuthContainer>
      </Container>
    </Background>
  );
};

export default AuthPage;

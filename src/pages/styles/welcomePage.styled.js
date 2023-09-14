import { NavLink } from 'react-router-dom';

import { baseColors } from 'constants';

import { Typography } from 'ui';

import styled from '@emotion/styled';

export const WelcomeContainer = styled.div(({ theme }) => ({
  width: '100%',
  textAlign: 'center',

  [theme.breakpoints.up('medium')]: {
    width: '473px',
  },
}));

export const UserImage = styled.img(({ theme }) => ({
  marginBottom: '14px',
  margin: '0 auto',

  [theme.breakpoints.up('medium')]: {
    width: '162px',
    height: '162px',
    marginBottom: '24px',
  },
}));

export const WelcomeText = styled(Typography)`
  margin-top: 24px;
  margin-bottom: 48px;
`;

export const RegisterLink = styled(NavLink)(({ register, theme }) => ({
  padding: register ? '14px 0' : 0,
  width: '100%',
  display: 'block',
  backgroundColor: register && baseColors.authColors.buttonBackground,
  borderRadius: '8px',
  color: register
    ? baseColors.authColors.textSecondary
    : baseColors.authColors.textPrimary,
  marginBottom: register ? '14px' : 0,
  fontWeight: 500,
  fontSize: '14px',

  [theme.breakpoints.up('medium')]: {
    width: '344px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

import { NavLink } from 'react-router-dom';

import { BASE_COLORS } from 'constants';

import styled from '@emotion/styled';

export const ErrorBackground = styled.section(({ theme, isLoggedIn }) => ({
  backgroundColor: theme.palette.background.primary,
  backgroundImage: !isLoggedIn ? BASE_COLORS.authColors.background : 'none',
  color: theme.palette.text.primary,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
}));

export const Container = styled.div(({ theme }) => ({
  padding: '0 20px',
  minWidth: '200px',

  [theme.breakpoints.up('medium')]: {
    width: '500px',
  },
  [theme.breakpoints.up('large')]: {
    width: '1000px',
  },
}));

export const Header = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
  alignItems: 'center',
  marginBottom: '48px',

  [theme.breakpoints.up('medium')]: {
    flexDirection: 'row',
  },
}));

export const Code = styled.div(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: '700',
  fontSize: '30px',
  lineHeight: '40px',
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.up('large')]: {
    fontSize: '50px',
  },
}));

export const Num = styled.p(({ theme }) => ({
  display: 'block',
  fontSize: '60px',
  lineHeight: '60px',

  [theme.breakpoints.up('large')]: {
    fontSize: '100px',
    lineHeight: '100px',
  },
}));

export const Description = styled.h2(({ theme }) => ({
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '40px',
  textAlign: 'center',

  [theme.breakpoints.up('large')]: {
    fontSize: '40px',
    lineHeight: '40px',
  },
}));

export const Start = styled.p(({ theme }) => ({
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '30px',

  [theme.breakpoints.down('medium')]: {
    marginBottom: '14px',
  },
  [theme.breakpoints.up('large')]: {
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '40px',
  },
}));

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  margin-bottom: 14px;
`;

export const Link = styled(NavLink)(
  {
    display: 'block',
    padding: '14px 0',
    width: '100%',
    borderRadius: '8px',
    marginBottom: '14px',
    transition: 'background-color 0.3s ease',
  },
  props => ({
    backgroundColor: props.theme.palette.accent.main,
    color: props.theme.palette.text.primaryButton,

    '&:hover': {
      backgroundColor: props.theme.palette.accent.light,
    },
  })
);

export const InviteText = styled.span`
  display: inline-block;
  margin-top: 14px;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

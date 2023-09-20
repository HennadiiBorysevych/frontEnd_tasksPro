import { BASE_COLORS } from 'constants';

import styled from '@emotion/styled';

export const LogoWrapper = styled.div(({ variant, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: variant === 'welcome' ? 'center' : 'flex-start',
  gap: variant === 'welcome' ? '14px' : '8px',
  marginTop: variant === 'welcome' ? '14px' : '0',
  padding: variant === 'welcome' ? '0' : '0 14px',

  [theme.breakpoints.up('medium')]: {
    padding: variant === 'welcome' ? '0' : '0 24px',
  },
}));

export const Welcome = styled.h1(
  {
    color: BASE_COLORS.authColors.textPrimary,
    fontSize: '28px',
    fontWeight: '600',
    lineHeight: '1.25',
    letterSpacing: '-1.12px',
  },
  props => ({
    [props.theme.breakpoints.up('medium')]: {
      fontSize: '40px',
      letterSpacing: '-1.6px',
    },
  })
);

export const Board = styled.h1(props => ({
  color: props.theme.palette.text.sidebarPrimary,
  fontSize: '16px',
  fontWeight: 600,
  letterSpacing: '-0.64px',
}));

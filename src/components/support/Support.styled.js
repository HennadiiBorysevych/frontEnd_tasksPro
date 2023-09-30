import { Typography } from 'ui';

import styled from '@emotion/styled';

export const SupportButton = styled.button(
  {
    padding: '14px',
    display: 'block',
    borderRadius: '8px',
    textAlign: 'left',
    margin: '40px 14px 24px',
    transition: 'box-shadow 0.3s, transform 0.3s',
  },
  props => ({
    backgroundColor: props.theme.palette.background.support,

    [props.theme.breakpoints.up('medium')]: {
      padding: '20px',
      margin: '40px 24px 24px',
    },

    '&:hover': {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      transform: 'scale(1.02)',
    },
  })
);

export const SupportPlate = styled.img`
  display: block;
  margin-bottom: 14px;
`;

export const SupportOffer = styled(Typography)({
  display: 'block',
  marginBottom: '18px',
});

export const AppName = styled.span(props => ({
  color: props.theme.palette.accent.main,
}));

export const SupportQuestion = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

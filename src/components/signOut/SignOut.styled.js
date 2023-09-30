import { Typography } from 'ui';

import styled from '@emotion/styled';

export const ButtonSignOut = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 24px;
  width: 100%;
`;

export const TextSignOut = styled(Typography)(props => ({
  display: 'block',
  transition: 'box-shadow 0.3s, transform 0.3s',

  '&:hover': {
    color: props.theme.palette.icon.signOut,
    transform: 'scale(1.02)',
  },
}));

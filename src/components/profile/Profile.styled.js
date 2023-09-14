import styled from '@emotion/styled/macro';

import { Typography } from 'ui';

export const UserName = styled(Typography)``;

export const UserAvatarWrapper = styled.div`
  border-radius: 8px;
`;

export const ClickWrap = styled.div(props => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',

  '&:hover': {
    [UserName]: {
      color: props.theme.palette.accent.main,
    },
    [UserAvatarWrapper]: {
      outline: `1px solid ${props.theme.palette.accent.main}`,
    },
  },
}));

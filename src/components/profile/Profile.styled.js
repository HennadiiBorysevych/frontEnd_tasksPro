import styled from '@emotion/styled/macro';

import { Typography } from 'ui';

export const UserName = styled(Typography)``;

export const UserAvatarWrapper = styled.span`
  display: 'block';
  border-radius: 8px;
`;

export const ProfileWrap = styled.button(props => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',

  '&:hover': {
    [UserName]: {
      color: props.theme.palette.accent.main,
    },
    [UserAvatarWrapper]: {
      outline: `1px solid ${props.theme.palette.accent.main}`,
    },
  },
}));

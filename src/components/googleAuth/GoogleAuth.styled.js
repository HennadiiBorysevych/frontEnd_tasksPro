import { BASE_COLORS } from 'constants';

import { Typography } from 'ui';

import styled from '@emotion/styled';

export const GoogleLink = styled.a(
  {
    padding: '14px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    backgroundColor: BASE_COLORS.authColors.buttonBackgroundSecondary,
    borderRadius: '8px',
    marginTop: '20px',
  },
  props => ({
    [props.theme.breakpoints.up('medium')]: {
      width: '344px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
);

export const ButtonText = styled(Typography)({
  color: BASE_COLORS.authColors.textPrimary,
});

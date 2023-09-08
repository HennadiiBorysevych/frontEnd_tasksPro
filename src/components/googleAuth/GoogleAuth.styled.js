import { baseColors } from 'constants';

import styled from '@emotion/styled';

export const GoogleLink = styled.a(
  {
    padding: '14px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    backgroundColor: baseColors.authColors.buttonBackgroundSecondary,
    borderRadius: '8px',
    color: baseColors.authColors.textPrimary,
    marginTop: '20px',
    fontSize: '14px',
    fontWeight: '500',
  },
  props => ({
    [props.theme.breakpoints.up('medium')]: {
      width: '344px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
);

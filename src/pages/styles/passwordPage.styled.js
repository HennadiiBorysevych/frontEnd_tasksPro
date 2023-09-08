import { baseColors } from 'constants';

import styled from '@emotion/styled';

export const PasswordContainer = styled.div(({ theme }) => ({
  position: 'relative',
  width: '100%',
  padding: '24px',
  backgroundColor: baseColors.authColors.form,
  borderRadius: '8px',

  [theme.breakpoints.up('medium')]: {
    padding: '40px',
    width: '424px',
  },
}));

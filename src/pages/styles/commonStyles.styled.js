import { BASE_COLORS } from 'constants';

import styled from '@emotion/styled';

export const Background = styled.section`
  background-image: ${BASE_COLORS.authColors.background};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Container = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    width: '100%',
  },

  props => ({
    [props.theme.breakpoints.up('small')]: {
      width: '375px',
    },
    [props.theme.breakpoints.up('medium')]: {
      width: '768px',
    },
    [props.theme.breakpoints.up('large')]: {
      padding: '0',
      width: '1440px',
    },
  })
);

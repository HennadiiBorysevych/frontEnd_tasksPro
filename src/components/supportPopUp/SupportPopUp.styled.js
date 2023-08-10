import styled from '@emotion/styled';

export const Container = styled.div({
  overflow: 'hidden',
  borderRadius: '8px',

  '@media (max-width: 374px)': {
    width: '100%',
    maxWidth: '335px',
  },
  '@media (min-width: 375px)': {
    width: '335px',
  },
  '@media (min-width: 768px)': {
    width: '400px',
  },
});

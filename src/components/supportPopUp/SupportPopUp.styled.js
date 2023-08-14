import styled from '@emotion/styled';

export const Container = styled.div({
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media (max-width: 374px)': {
    maxWidth: '335px',
  },
  '@media (min-width: 375px)': {
    width: '335px',
  },
  '@media (min-width: 768px)': {
    width: '400px',
  },
});


export const Wrapper = styled.span`
  color: ${props => props.theme.palette.text.primary};
`;

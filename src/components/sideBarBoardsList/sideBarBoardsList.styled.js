import styled from '@emotion/styled';

export const BoardList = styled.ul(
  {
    position: 'relative',
    height: '100%',
    maxHeight: '256px',
    overflowY: 'auto',
  },
  props => ({
    [props.theme.breakpoints.up('medium')]: {
      maxHeight: '380px',
    },
    [props.theme.breakpoints.up('large')]: {
      maxHeight: '100%',
    },
  })
);

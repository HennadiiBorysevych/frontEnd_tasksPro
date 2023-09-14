import styled from '@emotion/styled';

export const BoardList = styled.ul(
  {
    position: 'relative',
    height: '100%',
    maxHeight: 'calc(100vh - 686px)',
  },
  props => ({
    [props.theme.breakpoints.up('medium')]: {
      maxHeight: 'calc(100vh - 898px)',
    },
    [props.theme.breakpoints.up('large')]: {
      minHeight: '126px',
      maxHeight: 'calc(100vh - 644px)',
    },
  })
);

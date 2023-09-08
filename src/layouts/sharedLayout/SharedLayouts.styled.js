import styled from '@emotion/styled';

export const ScreenWrapper = styled.div(props => ({
  [props.theme.breakpoints.up('large')]: {
    display: 'flex',
  },
}));

export const MainWrapper = styled.div(props => ({
  width: '100%',

  [props.theme.breakpoints.up('large')]: {
    width: 'calc(100% - 260px)',
  },
}));

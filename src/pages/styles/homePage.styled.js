import styled from '@emotion/styled';

export const BoardWrap = styled.div(
  {
    padding: '14px 20px 24px',
    backgroundSize: 'cover',
    height: '100%',
    maxHeight: 'calc(100vh - 60px)',
  },
  props => ({
    backgroundColor: props.theme.palette.background.primary,
    backgroundImage: `url(${props.bg})`,

    [props.theme.breakpoints.up('medium')]: {
      padding: '26px 32px 32px',
      maxHeight: 'calc(100vh - 68px)',
    },

    [props.theme.breakpoints.up('large')]: {
      padding: '10px 24px 8px',
    },
  })
);

export const DefaultWrapper = styled.div(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 98px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',

  [theme.breakpoints.up('small')]: {
    padding: '0 20px',
    width: '375px',
  },

  [theme.breakpoints.up('medium')]: {
    padding: '0',
    width: '486px',
    height: 'calc(100vh - 126px)',
  },

  [theme.breakpoints.up('large')]: {
    height: 'calc(100vh - 86px)',
  },
}));

export const WelcomeText = styled.p(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '1.3',
  letterSpacing: '-0.24px',
  color: theme.palette.text.secondary,
  textAlign: 'center',
}));

export const CreateBoardLink = styled.a(({ theme }) => ({
  textDecoration: 'none',
  cursor: 'pointer',
  color: theme.palette.accent.main,

  '&:focus': {
    outline: 'none',
  },
}));

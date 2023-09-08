import styled from '@emotion/styled';

export const Backdrop = styled.div(props => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 999,
  width: '100%',
  height: '100%',
  padding: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: props.theme.palette.background.backdrop,
}));

export const ModalBox = styled.div(
  {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
  },
  props => ({
    [props.theme.breakpoints.down('small')]: {
      maxWidth: '335px',
    },
    [props.theme.breakpoints.up('small')]: {
      width: '335px',
    },
    [props.theme.breakpoints.up('medium')]: {
      width: props.variant === 'support' ? '400px' : '350px',
    },
  })
);

import styled from '@emotion/styled';

export const Backdrop = styled.div(
  {
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
    backgroundColor: 'rgba(21, 21, 21, 0.5)',
  },
  props => ({
    background: props.background,
  })
);
export const ModalBox = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '8px',
});

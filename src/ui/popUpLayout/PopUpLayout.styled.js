import styled from '@emotion/styled';

export const Container = styled.div(props => ({
  position: 'relative',
  padding: '24px',
  overflow: 'hidden',
  backgroundColor: props.theme.palette.background.modal,
  borderRadius: '8px',
  border: `1px solid ${props.theme.palette.background.modalBorder}`,
  boxShadow: '0px 4px 16px 0px rgba(22, 22, 22, 0.05)',
}));

export const CloseBtn = styled.button({
  position: 'absolute',
  top: '14px',
  right: '14px',
  cursor: 'pointer',
});

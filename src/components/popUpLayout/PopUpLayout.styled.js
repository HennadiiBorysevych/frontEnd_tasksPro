import styled from '@emotion/styled';

export const Container = styled.div(props => ({
  position: 'relative',
  padding: '24px',
  overflow: 'hidden',
  backgroundColor: props.theme.palette.background.dropdown,
  borderRadius: '8px',
}));

export const CloseBtn = styled.button({
  position: 'absolute',
  top: '14px',
  right: '14px',
  // width: '18px',
  // height: '18px',
  cursor: 'pointer',
});

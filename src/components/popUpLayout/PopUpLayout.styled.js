import styled from '@emotion/styled';

export const Container = styled.div({
  position: 'relative',
  padding: '24px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  overflow: 'hidden',
  backgroundColor: '#151515',
  borderRadius: '8px',
});

export const CloseBtn = styled.button({
  position: 'absolute',
  top: '14px',
  right: '14px',
  width: '18px',
  height: '18px',
  cursor: 'pointer',
});

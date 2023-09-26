import styled from '@emotion/styled';

export const Container = styled.div(({ variantForm, theme }) => ({
  position: 'relative',
  padding: '24px',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.modal,
  borderRadius: '8px',
  border: `1px solid ${theme.palette.background.modalBorder}`,
  width: variantForm === 'passwordForm' && 335,
  boxShadow: '0px 4px 16px 0px rgba(22, 22, 22, 0.05)',

  [theme.breakpoints.up('medium')]: {
    padding: variantForm === 'passwordForm' && 40,
    width: variantForm === 'passwordForm' && 424,
  },
}));

export const CloseBtn = styled.button(({ variantForm }) => ({
  display: variantForm === 'passwordForm' && 'none',
  position: 'absolute',
  top: '14px',
  right: '14px',
  cursor: 'pointer',
}));

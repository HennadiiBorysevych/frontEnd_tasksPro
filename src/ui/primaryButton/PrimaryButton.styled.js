import styled from '@emotion/styled';

const buttonStyles = {
  display: 'flex',
  gap: '8px',
  padding: '14px 0',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',

  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '-0.28px',
  textAlign: 'center',
};

const getMarginTop = variantMarginTop => {
  switch (variantMarginTop) {
    case 'formPopUp':
      return '24px';
    case 'settingsPopUp':
      return '40px';
    default:
      return 0;
  }
};

export const ButtonStyled = styled.button(
  ({ theme, width, variantMarginTop }) => ({
    ...buttonStyles,
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.text.primaryButton,
    marginTop: getMarginTop(variantMarginTop),
    width: width === 'board' ? '335px' : '100%',

    '&:hover': {
      backgroundColor: theme.palette.accent.light,
    },
  })
);

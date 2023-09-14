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

const getMarginTop = version => {
  switch (version) {
    case 'formPopUp':
      return '24px';
    case 'settingsPopUp':
      return '40px';
    default:
      return 0;
  }
};

export const ButtonStyled = styled.button(({ theme, version }) => ({
  ...buttonStyles,
  backgroundColor: theme.palette.accent.main,
  color: theme.palette.text.primaryButton,
  marginTop: getMarginTop(version),
  width: version === 'board' ? '335px' : '100%',

  '&:hover': {
    backgroundColor: theme.palette.accent.light,
  },
}));

import styled from '@emotion/styled/macro';

import Typography from '../typography/Typography';

const buttonStyles = {
  display: 'flex',
  gap: '8px',
  padding: '14px 0',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
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

    marginTop: getMarginTop(variantMarginTop),
    width: width === 'board' ? '335px' : '100%',

    '&:hover': {
      backgroundColor: theme.palette.accent.light,
    },
  })
);

export const ButtonText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primaryButton,
}));

import styled from '@emotion/styled';

export const ButtonStyled = styled.button(props => ({
  display: 'flex',
  gap: '8px',
  width: '100%',
  padding: '14px 0',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',

  backgroundColor: props.theme.palette.accent.main,
  color: props.theme.palette.text.primaryButton,

  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '-0.28px',
  textAlign: 'center',

  '&:hover': {
    backgroundColor: props.theme.palette.accent.light,
  },
}));

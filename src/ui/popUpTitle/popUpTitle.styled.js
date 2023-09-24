import styled from '@emotion/styled';

export const Title = styled.h4(props => ({
  marginBottom: props.variantMarginBottom === 'passwordForm' ? '40px' : '24px',
  fontSize: '18px',
  color: props.theme.palette.text.primary,
}));

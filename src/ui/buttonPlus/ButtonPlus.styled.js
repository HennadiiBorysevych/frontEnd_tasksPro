import styled from '@emotion/styled';

export const SpanStyled = styled.span(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  width: props.width ? `${props.width}px` : '28px',
  height: props.height ? `${props.height}px` : '28px',
  backgroundColor:
    props.variant === 'sidemenu'
      ? props.theme.palette.background.buttonPlusSideBar
      : props.variant === 'addColumn'
      ? props.theme.palette.background.buttonPlusSecondary
      : props.theme.palette.background.buttonPlus,
  transition: 'all 250ms linear',
  cursor: 'pointer',
}));

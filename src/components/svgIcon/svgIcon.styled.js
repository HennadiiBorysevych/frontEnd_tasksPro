import styled from '@emotion/styled';

export const SvgStyled = styled.svg`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
  stroke: ${props =>
    props.variant === 'header'
      ? `${props.theme.palette.text.primary}CC`
      : props.variant === 'primary'
      ? props.theme.palette.text.plus
      : props.variant === 'sidemenu'
      ? props.theme.palette.primary.buttonPlusIcon
      : props.variant === 'logOut'
      ? props.theme.palette.primary.iconLog
      : props.variant === 'support'
      ? props.theme.palette.text.sidemenu
      : props.theme.palette.text.sidemenu};

  &:hover {
    stroke: ${props =>
      props.variant === 'sidemenu'
        ? props.theme.palette.hover.primaryButton
        : props.variant === 'logOut'
        ? props.theme.palette.hover.primaryButton
        : props.variant === 'support'
        ? props.theme.palette.hover.primaryButton
        : props.theme.palette.hover.primaryButton};
  }
`;


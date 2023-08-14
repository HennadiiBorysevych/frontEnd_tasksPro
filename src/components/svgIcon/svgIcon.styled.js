import styled from '@emotion/styled';

export const SvgStyled = styled.svg`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
  stroke: ${props => {
  if (props.variant === 'popUp') {
    return props.isActive
      ? `${props.theme.palette.text.primary}`
      : `${props.theme.palette.text.primary}80`;
  } else if (props.variant === 'header') {
    return props.isActive
      ? `${props.theme.palette.text.primary}CC`
      : props.theme.palette.text.primary;
  } else if (props.variant === 'primary') {
    return props.theme.palette.text.plus;
  } else if (props.variant === 'sidemenu') {
    return props.theme.palette.primary.buttonPlusIcon;
  } else if (props.variant === 'logOut') {
    return props.theme.palette.primary.iconLog;
  } else if (props.variant === 'support') {
    return props.theme.palette.text.sidemenu;
  } else if (props.variant === 'cardItem') {
    return props.theme.palette.background.primaryButton;
  } else if (props.variant === 'buttonCard') {
    return props.theme.palette.background.cardItem;
  }
    return props.theme.palette.text.sidemenu;
  }};

  &:hover {
    stroke: ${props => {
      if (props.variant === 'sidemenu') {
        return props.theme.palette.hover.primaryButton;
      } else if (props.variant === 'logOut') {
        return props.theme.palette.hover.iconLogOut;
      } else if (props.variant === 'support') {
        return props.theme.palette.hover.support;
      }
      return props.theme.palette.hover.primaryButton;
    }};
  }
`;

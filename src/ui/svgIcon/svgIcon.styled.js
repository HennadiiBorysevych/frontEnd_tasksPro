import styled from '@emotion/styled';

export const SvgStyled = styled.svg`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
  stroke: ${props => {
    if (props.variant === 'popUp') {
      return props.isActive
        ? `${props.theme.palette.icon.primary}`
        : `${props.theme.palette.icon.primaryMedium}`;
    } else if (props.variant === 'header') {
      return props.isActive
        ? `${props.theme.palette.icon.primaryLight}`
        : props.theme.palette.icon.primary;
    } else if (props.variant === 'primary') {
      return props.theme.palette.icon.buttonPlusPrimary;
    } else if (props.variant === 'sidemenu') {
      return props.theme.palette.icon.buttonPlusSideBar;
    } else if (props.variant === 'addColumn') {
      return props.theme.palette.icon.buttonPlusSecondary;
    } else if (props.variant === 'logOut') {
      return props.theme.palette.icon.signOut;
    } else if (props.variant === 'support') {
      return props.isActive
        ? `${props.theme.palette.icon.activeSideBar}`
        : `${props.theme.palette.icon.passiveSideBar}`;
    } else if (props.variant === 'cardItem') {
      return props.theme.palette.accent.main;
    } else if (props.variant === 'buttonCard') {
      return props.theme.palette.background.card;
    } else if (props.variant === 'background') {
      return props.theme.palette.icon.primaryExtraLight;
    } else if (props.variant === 'deadlineExpired') {
      return props.theme.palette.icon.attention;
    }
    return props.theme.palette.icon.buttonPlusAvatar; //---перевірити--------
  }};

  &:hover {
    stroke: ${props => {
      if (props.variant === 'deadlineExpired') {
        return props.theme.palette.icon.attentionHover;
      }
      if (props.variant === 'logOut') {
        return props.theme.palette.icon.signOutHover;
      } else if (
        props.variant !== 'sidemenu' &&
        props.variant !== 'buttonCard'
      ) {
        return props.theme.palette.accent.light;
      }
    }};
  }
`;

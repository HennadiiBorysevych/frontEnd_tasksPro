import styled from '@emotion/styled';

export const SvgStyled = styled.svg(props => ({
  cursor: 'pointer',
  width: props.size + 'px',
  height: props.size + 'px',
  display:
    props.variant === 'popUp' || props.variant === 'cardItem'
      ? 'block'
      : 'initial',
  stroke: {
    addAvatar: props.theme.palette.icon.buttonPlusAvatar,
    addColumn: props.theme.palette.icon.buttonPlusSecondary,
    background: props.theme.palette.icon.primaryExtraLight,
    cardItem: props.theme.palette.accent.main,
    deadlineExpired: props.theme.palette.icon.attention,
    header: props.isActive
      ? props.theme.palette.icon.primaryLight
      : props.theme.palette.icon.primary,
    logOut: props.theme.palette.icon.signOut,
    popUp: props.isActive
      ? props.theme.palette.icon.primary
      : props.theme.palette.icon.primaryMedium,
    primary: props.theme.palette.icon.buttonPlusPrimary,
    sidemenu: props.theme.palette.icon.buttonPlusSideBar,
    support: props.isActive
      ? props.theme.palette.icon.activeSideBar
      : props.theme.palette.icon.passiveSideBar,
  }[props.variant],
  '&:hover': {
    stroke: (() => {
      if (props.variant === 'deadlineExpired') {
        return props.theme.palette.icon.attentionHover;
      }
      if (props.variant === 'logOut') {
        return props.theme.palette.icon.signOutHover;
      }
      if (props.variant !== 'sidemenu' && props.variant !== 'buttonCard') {
        return props.theme.palette.accent.light;
      }
    })(),
  },
}));

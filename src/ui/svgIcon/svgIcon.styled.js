import styled from '@emotion/styled';

export const SvgStyled = styled.svg(
  ({ size, theme, variantIcon, isActive }) => ({
    cursor: 'pointer',
    width: size + 'px',
    height: size + 'px',
    display:
      variantIcon === 'popUp' || variantIcon === 'cardItem'
        ? 'block'
        : 'initial',
    stroke: {
      addAvatar: theme.palette.icon.buttonPlusAvatar,
      addColumn: theme.palette.icon.buttonPlusSecondary,
      background: theme.palette.icon.primaryExtraLight,
      cardItem: theme.palette.accent.main,
      deadlineExpired: theme.palette.icon.attention,
      header: isActive
        ? theme.palette.icon.primaryLight
        : theme.palette.icon.primary,
      logOut: theme.palette.icon.signOut,
      popUp: isActive
        ? theme.palette.icon.primary
        : theme.palette.icon.primaryMedium,
      primary: theme.palette.icon.buttonPlusPrimary,
      sidemenu: theme.palette.icon.buttonPlusSideBar,
      support: isActive
        ? theme.palette.icon.activeSideBar
        : theme.palette.icon.passiveSideBar,
    }[variantIcon],
    '&:hover': {
      stroke: (() => {
        if (variantIcon === 'deadlineExpired') {
          return theme.palette.icon.attentionHover;
        }
        if (variantIcon === 'logOut') {
          return theme.palette.icon.signOutHover;
        }
        if (variantIcon !== 'sidemenu' && variantIcon !== 'buttonCard') {
          return theme.palette.accent.light;
        }
      })(),
    },
  })
);

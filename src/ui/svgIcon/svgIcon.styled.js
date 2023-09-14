import styled from '@emotion/styled';

// const styles = {
//   base: {
//     cursor: 'pointer',
//   },
// };

// const colorVariants = {
//   addAvatar: props => ({
//     stroke: props.theme.palette.icon.buttonPlusAvatar,
//     hoverStroke: 'none',
//   }),
//   addColumn: props => ({
//     stroke: props.theme.palette.icon.buttonPlusSecondary,
//     hoverStroke: props.theme.palette.accent.light,
//   }),
//   background: props => ({
//     stroke: props.theme.palette.icon.primaryExtraLight,
//     hoverStroke: props.theme.palette.accent.light,
//   }),
//   cardItem: props => ({
//     stroke: props.theme.palette.accent.main,
//     hoverStroke: props.theme.palette.accent.light,
//   }),
//   deadlineExpired: props => ({
//     stroke: props.theme.palette.icon.attention,
//     hoverStroke: props.theme.palette.icon.attentionHover,
//   }),
//   header: props => ({
//     stroke: props.isActive
//       ? props.theme.palette.icon.primaryLight
//       : props.theme.palette.icon.primary,
//     hoverStroke: props.theme.palette.accent.light,
//   }),
//   logOut: props => ({
//     stroke: props.theme.palette.icon.signOut,
//     hoverStroke: props.theme.palette.icon.signOutHover,
//   }),
//   popUp: props => ({
//     stroke: props.isActive
//       ? props.theme.palette.icon.primary
//       : props.theme.palette.icon.primaryMedium,
//     hoverStroke: props.theme.palette.accent.light,
//   }),
//   primary: props => ({
//     stroke: props.theme.palette.icon.buttonPlusPrimary,
//     hoverStroke: props.theme.palette.accent.light,
//   }),
//   sidemenu: props => ({
//     stroke: props.theme.palette.icon.buttonPlusSideBar,
//     hoverStroke: 'none',
//   }),
//   support: props => ({
//     stroke: props.isActive
//       ? props.theme.palette.icon.activeSideBar
//       : props.theme.palette.icon.passiveSideBar,
//     hoverStroke: props.theme.palette.accent.light,
//   }),
// };

// export const SvgStyled = styled.svg(props => ({
//   ...styles.base,
//   width: `${props.size}px`,
//   height: `${props.size}px`,
//   stroke: colorVariants[props.variant](props).stroke,

//   '&:hover': {
//     stroke: colorVariants[props.variant](props).hoverStroke,
//   },
// }));

export const SvgStyled = styled.svg`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  cursor: pointer;
  stroke: ${props => {
    if (props.variant === 'addAvatar') {
      return props.theme.palette.icon.buttonPlusAvatar;
    } else if (props.variant === 'addColumn') {
      return props.theme.palette.icon.buttonPlusSecondary;
    } else if (props.variant === 'background') {
      return props.theme.palette.icon.primaryExtraLight;
    } else if (props.variant === 'cardItem') {
      return props.theme.palette.accent.main;
    } else if (props.variant === 'deadlineExpired') {
      return props.theme.palette.icon.attention;
    } else if (props.variant === 'header') {
      return props.isActive
        ? `${props.theme.palette.icon.primaryLight}`
        : props.theme.palette.icon.primary;
    } else if (props.variant === 'logOut') {
      return props.theme.palette.icon.signOut;
    } else if (props.variant === 'popUp') {
      return props.isActive
        ? `${props.theme.palette.icon.primary}`
        : `${props.theme.palette.icon.primaryMedium}`;
    } else if (props.variant === 'primary') {
      return props.theme.palette.icon.buttonPlusPrimary;
    } else if (props.variant === 'sidemenu') {
      return props.theme.palette.icon.buttonPlusSideBar;
    } else if (props.variant === 'support') {
      return props.isActive
        ? `${props.theme.palette.icon.activeSideBar}`
        : `${props.theme.palette.icon.passiveSideBar}`;
    }
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

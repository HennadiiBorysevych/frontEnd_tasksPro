import styled from '@emotion/styled';

export const CommonStyles = styled.div(props => ({
  maxHeight:
    props.variant === 'columns'
      ? 'calc(100vh - 194px)'
      : props.variant === 'board'
      ? 'calc(100vh - 169px)'
      : props.variant === 'boardList' && 'calc(100vh - 686px)',
  [props.theme.breakpoints.up('medium')]: {
    maxHeight:
      props.variant === 'columns'
        ? 'calc(100vh - 244px)'
        : props.variant === 'board'
        ? 'calc(100vh - 184px)'
        : props.variant === 'boardList' && 'calc(100vh - 738px)',
  },
  [props.theme.breakpoints.up('large')]: {
    maxHeight:
      props.variant === 'columns'
        ? 'calc(100vh - 156px)'
        : props.variant === 'board' && 'calc(100vh - 128px)',
  },

  '.os-scrollbar-horizontal': {
    marginBottom: '4px',
  },
  '.os-scrollbar-horizontal .os-scrollbar-track': {
    height: '12px !important',
    '--os-track-bg': props.theme.palette.background.horisontalScrollbarGutter,
    '--os-handle-bg-hover': props.theme.palette.accent.main,
    '--os-handle-bg-active': props.theme.palette.accent.light,
    '--os-handle-bg': props.theme.palette.background.horisontalScrollbarSlider,
  },
  '.os-scrollbar-horizontal .os-scrollbar-handle': {
    height: '12px !important',
  },
  '.os-scrollbar-vertical .os-scrollbar-handle': {
    width: '8px !important',
  },
  '.os-scrollbar-vertical .os-scrollbar-track': {
    width: '8px !important',
    ' --os-track-bg': props.theme.palette.background.verticalScrollbarGutter,
    '--os-handle-bg': props.theme.palette.background.verticalScrollbarSlider,
    '--os-handle-bg-hover': props.theme.palette.accent.main,
    '--os-handle-bg-active': props.theme.palette.accent.light,
  },
}));

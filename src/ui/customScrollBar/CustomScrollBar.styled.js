import styled from '@emotion/styled';

export const CommonStyles = styled.div(({ variantScroll, theme }) => ({
  overflow: 'hidden',

  maxHeight:
    variantScroll === 'columns'
      ? 'calc(100vh - 194px)'
      : variantScroll === 'board'
      ? 'calc(100vh - 169px)'
      : variantScroll === 'boardList' && 'calc(100vh - 686px)',
  [theme.breakpoints.up('medium')]: {
    maxHeight:
      variantScroll === 'columns'
        ? 'calc(100vh - 244px)'
        : variantScroll === 'board'
        ? 'calc(100vh - 184px)'
        : variantScroll === 'boardList' && 'calc(100vh - 738px)',
  },
  [theme.breakpoints.up('large')]: {
    maxHeight:
      variantScroll === 'columns'
        ? 'calc(100vh - 156px)'
        : variantScroll === 'board' && 'calc(100vh - 128px)',
  },

  '.os-scrollbar-horizontal': {
    marginBottom: '4px',
  },
  '.os-scrollbar-horizontal .os-scrollbar-track': {
    height: '12px !important',
    '--os-track-bg': theme.palette.background.horisontalScrollbarGutter,
    '--os-handle-bg-hover': theme.palette.accent.main,
    '--os-handle-bg-active': theme.palette.accent.light,
    '--os-handle-bg': theme.palette.background.horisontalScrollbarSlider,
  },
  '.os-scrollbar-horizontal .os-scrollbar-handle': {
    height: '12px !important',
  },
  '.os-scrollbar-vertical .os-scrollbar-handle': {
    width: '8px !important',
  },
  '.os-scrollbar-vertical .os-scrollbar-track': {
    width: '8px !important',
    ' --os-track-bg': theme.palette.background.verticalScrollbarGutter,
    '--os-handle-bg': theme.palette.background.verticalScrollbarSlider,
    '--os-handle-bg-hover': theme.palette.accent.main,
    '--os-handle-bg-active': theme.palette.accent.light,
  },
}));

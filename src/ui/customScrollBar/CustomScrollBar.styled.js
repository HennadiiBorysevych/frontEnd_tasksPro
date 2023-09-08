import styled from '@emotion/styled';

export const CommonStyles = styled.div(props => ({
  '.os-scrollbar-horizontal .os-scrollbar-track': {
    '--os-track-bg': props.theme.palette.background.horisontalScrollbarGutter,
    '--os-handle-bg-hover': props.theme.palette.accent.main,
    '--os-handle-bg': props.theme.palette.background.horisontalScrollbarSlider,
  },
  '.os-scrollbar-vertical .os-scrollbar-track': {
    ' --os-track-bg': props.theme.palette.background.verticalScrollbarGutter,
    '--os-handle-bg': props.theme.palette.background.verticalScrollbarSlider,
    '--os-handle-bg-hover': props.theme.palette.accent.main,
  },
}));

import { Typography } from 'ui';

import styled from '@emotion/styled';

export const BoardDecor = styled.div`
  margin-top: 14px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  & + & {
    margin-top: 24px;
  }
`;

export const RadioField = styled.input(
  {
    position: 'fixed',
    opacity: 0,
    pointerEvents: 'none',
  },
  props => ({
    '&:hover ~ .background-label, &:checked ~ .background-label': {
      outline: `1px solid ${props.theme.palette.accent.main}`,
    },
  })
);

export const IconLabel = styled.label`
  & + & {
    margin-left: 8px;
  }
`;

export const BoardText = styled(Typography)`
  width: 100%;
  text-align: left;
  margin-bottom: 14px;
  line-height: 21px;
`;

export const DefaultBackgroundIconWrapper = styled.div(
  {
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '7px',
    margin: '2px',
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  props => ({
    backgroundColor: props.theme.palette.background.primary,

    '&:active, &.active': {
      border: `1px solid ${props.theme.palette.background.buttonPlusSideBar}`,
    },
  })
);

export const BackgroundImage = styled.div(props => ({
  height: '28px',
  width: '28px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: '7px',
  cursor: 'pointer',
  margin: '2px',
  backgroundImage: `url(${props.bgIndex.regular})`,
  border: 'none',
  '@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)':
    {
      backgroundImage: `url(${props.bgIndex.x2})`,
    },
  '@media (min-device-pixel-ratio: 3), (min-resolution: 288dpi), (min-resolution: 3dppx)':
    {
      backgroundImage: `url(${props.bgIndex.x3})`,
    },
  '&:hover': {
    transform: 'scale(1.1)',
  },
  '&:active, &.active': {
    border: `1px solid ${props.theme.palette.background.buttonPlusSideBar}`,
  },
}));

import styled from '@emotion/styled';

export const Avatar = styled.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  props => ({
    margin: props.margin,
    width: props.width,
    height: props.height,
  })
);

export const AvatarBg = styled.div(
  props => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: props.theme.palette.background.bord,
    '::before': {
      position: 'absolute',
      zIndex: '2',
      top: '30%',
      left: '50%',
      transform: 'translate( -50%, 0)',
      content: '""',
      borderRadius: '50%',
      backgroundColor: props.theme.palette.background.popUp,
    },
    '::after': {
      position: 'absolute',
      zIndex: '2',
      bottom: '0',
      left: '50%',
      transform: 'translate( -50%, 54%)',
      content: '""',
      borderRadius: '50%',
      backgroundColor: props.theme.palette.background.popUp,
    },
  }),
  props => ({
    '::before': {
      width: `${Number.parseInt(props.size) * 0.338}px`,
      height: `${Number.parseInt(props.size) * 0.338}px`,
    },
    '::after': {
      width: `${Number.parseInt(props.size) * 0.824}px`,
      height: `${Number.parseInt(props.size) * 0.824}px`,
    },
  })
);

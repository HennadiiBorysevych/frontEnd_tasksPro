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
    width: props.profile ? '32px' : '68px',
    height: props.profile ? '32px' : '68px',
  })
);

export const AvatarImage = styled.img(props => ({
  objectFit: 'cover',
  width: props.profile ? '32px' : '68px',
  height: props.profile ? '32px' : '68px',
}));

export const AvatarBg = styled.div(
  props => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: props.theme.palette.background.primary,

    '::before': {
      position: 'absolute',
      zIndex: '2',
      top: '30%',
      left: '50%',
      transform: 'translate( -50%, 0)',
      content: '""',
      width: props.profile ? '23px' : '10px',
      height: props.profile ? '23px' : '10px',
      borderRadius: '50%',
      backgroundColor: props.theme.palette.background.modal,
    },
    '::after': {
      position: 'absolute',
      zIndex: '2',
      bottom: '0',
      left: '50%',
      transform: 'translate( -50%, 54%)',
      content: '""',
      width: props.profile ? '62px' : '28px',
      height: props.profile ? '62px' : '28px',
      borderRadius: '50%',
      backgroundColor: props.theme.palette.background.modal,
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

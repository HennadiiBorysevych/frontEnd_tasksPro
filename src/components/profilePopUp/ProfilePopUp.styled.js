import styled from '@emotion/styled';

export const AvatarWrap = styled.div(props => ({
  position: 'relative',
  marginBottom: '14px',
  width: '68px',
  height: '79px',
  backgroundColor: props.avatar ? null : props.theme.palette.background.primary,
}));

export const AddButtonWrap = styled.div(props => ({
  position: 'absolute',
  zIndex: '3',
  bottom: '0%',
  left: '50%',
  transform: 'translate( -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '6px',
}));

export const AvatarInput = styled.input({
  position: 'absolute',
  zIndex: '4',
  width: '68px',
  height: '68px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  ' ::file-selector-button ': {
    visibility: 'hidden',
  },
});

export const AvatarBg = styled.div(
  props => ({
    position: 'relative',
    width: '100%',
    height: '68px',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: props.theme.palette.background.primary,

    '::before': {
      position: 'absolute',
      zIndex: '2',
      top: '30%',
      left: '50%',
      transform: 'translate( -50%, 0)',
      content: "''",
      borderRadius: '50%',
      backgroundColor: props.theme.palette.background.avatarDefault,
    },
    '::after': {
      position: 'absolute',
      zIndex: '2',
      bottom: '0',
      left: '50%',
      transform: 'translate( -50%, 54%)',
      content: "''",
      borderRadius: '50%',
      backgroundColor: props.theme.palette.background.avatarDefault,
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

import { media } from 'helpers';

import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  ${media.PRESMALL`
   max-width: 335px;
    `}

  ${media.SMALL`
  width: 335px;
  `}

    ${media.MEDIUM`
  width: 400px;
  `}
`;

export const AvatarWrap = styled.div(
  {
    position: 'relative',
    margin: '0 auto 24px auto',
    width: '68px',
    height: '68px',
  },
  props => ({
    background: props.background ?? null,
  })
);

export const AddButtonWrap = styled.div(props => ({
  position: 'absolute',
  zIndex: '3',
  bottom: '0%',
  left: '50%',
  transform: 'translate( -50%, 50%)',
  width: '24px',
  height: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '6px',
  backgroundColor: props.theme.palette.background.profile,
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
export const Input = styled.input({
  padding: '14px 18px',
  width: '100%',
  fontSize: '14px',
  borderRadius: '8px',
});

export const AvatarBg = styled.div(
  props => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
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

export const TextChangePassword = styled.p`
  text-align: center;
  color: ${props => `${props.theme.palette.text.primary}B2`};
  cursor: pointer;
`;

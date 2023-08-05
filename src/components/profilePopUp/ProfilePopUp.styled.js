import styled from '@emotion/styled';

export const Container = styled.div({
  overflow: 'hidden',
  borderRadius: '8px',

  '@media (max-width: 374px)': {
    width: '100%',
    maxWidth: '335px',
  },
  '@media (min-width: 375px)': {
    width: '335px',
  },
  '@media (min-width: 768px)': {
    width: '400px',
  },

  backgroundColor: '#1F1F1F',
});

export const AvatarWrap = styled.div({
  position: 'relative',
  margin: '0 auto 24px auto',
});

export const AddButtonWrap = styled.div({
  position: 'absolute',
  zIndex: '3',
  bottom: '0%',
  left: '50%',
  transform: 'translate( -50%, 50%)',
  // width: '24px',
  // height: '24px',
  // outline: '1px solid red',
});
export const Input = styled.input(
  {
    width: '68px',
    height: '68px',
    outline: '1px solid red',
  },
  props => ({
    background: props.background ?? null,
  })
);
export const AvatarBg = styled.div(
  {
    position: 'relative',
    width: '100%',
    height: '100%',
    '::before': {
      // position: 'absolute',
      // zIndex: '2',
      top: '30%',
      left: '50%',
      transform: 'translate( -50%, 0)',
      content: '""',
      borderRadius: '50%',
      backgroundColor: '#151515',
    },
    '::after': {
      // position: 'absolute',
      // zIndex: '2',
      bottom: '0',
      left: '50%',
      transform: 'translate( -50%, 54%)',
      content: '""',
      borderRadius: '50%',
      backgroundColor: '#151515',
    },
  },
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

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

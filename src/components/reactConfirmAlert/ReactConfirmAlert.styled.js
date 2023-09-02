import { css } from '@emotion/react';

import styled from '@emotion/styled';
// #react-confirm-alert .react-confirm-alert-overlay.undefined

export const Overlay = styled.div(
  () => css`
    #react-confirm-alert .react-confirm-alert-overlay {
      background-color: rgba(21, 21, 21, 0.5) !important;
    }
  `
);
export const AlertContainer = styled.div`
  background-color: ${props =>
    props.theme === 'Dark' ? '#333333' : '#ffffff'};
  color: ${props => (props.theme === 'Dark' ? '#ffffff' : '#333333')};
  padding: 20px;
  margin: 10px;
  border: 1px solid #bedbb0;
  border-radius: 5px;
`;

export const ConfirmDialog = styled.div`
  margin-top: 20px;
  color: white;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const CancelButton = styled.button`
  background-color: green;
  /* background-color: ${props => `${props.theme.palette}`}; */
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: greenyellow;
    /* background-color: ${props => `${props.theme.palette}`}; */
  }
`;
// export const CancelButton = styled.button(props => ({
//   backgroundColor: props.theme.palette.background.primaryButton,
//   border: '1px solid black',
//   padding: '10px',
//   borderRadius: '5px',
//   transition: 'background-color 0.3s ease',

//   '&:hover': {
//     backgroundColor: props.theme.palette.hover.primaryButton,
//   },
// }));

export const ConfirmDeleteButton = styled.button`
  background-color: red;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(239, 68, 68);
  }
`;

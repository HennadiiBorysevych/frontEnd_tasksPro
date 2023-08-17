import styled from '@emotion/styled';

export const Overlay = styled.div`
  /* background-color: rgba(21, 21, 21, 0.5); */
`;

export const AlertContainer = styled.div`
  background-color: ${props =>
    props.theme === 'Dark' ? '#333333' : '#ffffff'};
  color: ${props => (props.theme === 'Dark' ? '#ffffff' : '#333333')};
  padding: 20px;
  margin: 10px;
  border: 1px solid black;
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
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(64, 212, 64);
  }
`;
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

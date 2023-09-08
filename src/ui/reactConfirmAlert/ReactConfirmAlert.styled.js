import styled from '@emotion/styled';

export const AlertContainer = styled.div(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: theme === 'Dark' ? '#151515' : '#fcfcfc',
  boxShadow: '0px 4px 16px 0px rgba(22, 22, 22, 0.05)',
  border: theme === 'Dark' && '1px solid rgba(190, 219, 176, 0.50)',
}));

export const AlertTitle = styled.h2(({ theme }) => ({
  color: theme === 'Dark' ? '#ffffff' : '#161616',
  marginBottom: '10px',
}));

export const AlertQuestion = styled.p(({ theme }) => ({
  color: theme === 'Dark' ? '#ffffff' : '#161616',
  marginBottom: '20px',
}));

export const ConfirmDialog = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 16px;
`;

export const CancelButton = styled.button(({ theme }) => ({
  backgroundColor: theme === 'Violet' ? '#5255bc' : '#bedbB0',
  color: theme === 'Violet' ? '#ffffff' : '#161616',
  padding: '10px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: theme === 'Violet' ? '#7b7ede' : '#9dc888',
  },
}));

export const ConfirmDeleteButton = styled.button`
  background-color: #df1010;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(239, 68, 68);
  }
`;

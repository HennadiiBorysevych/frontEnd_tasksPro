import styled from '@emotion/styled';

export const Header = styled.div`
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: ${({ boardName }) =>
    boardName ? 'space-between' : 'flex-end'};
  background-color: #121212;
  color: #ffffff;
`;

export const BoardTitle = styled.p`
  display: ${({ boardName }) => (boardName ? 'block' : 'none')};
`;

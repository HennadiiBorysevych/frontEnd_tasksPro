import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ boardName }) =>
    boardName ? 'space-between' : 'flex-end'};
  background-color: #1f1f1f;
  color: #ffffff;
  margin-bottom: 39px;

  @media screen and (min-width: 768px) {
    margin-bottom: 26px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
  }
`;

export const BoardTitle = styled.p`
  display: ${({ boardName }) => (boardName ? 'block' : 'none')};
`;

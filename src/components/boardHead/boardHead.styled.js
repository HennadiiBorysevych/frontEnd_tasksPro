import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ boardName }) =>
    boardName ? 'flex-end' : 'space-between'};
  color: #ffffff;
  margin-bottom: 39px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 26px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
  }
`;

export const BoardTitle = styled.p`
  font-size: 18px;
  letter-spacing: -0.36px;
  font-weight: 500;
`;

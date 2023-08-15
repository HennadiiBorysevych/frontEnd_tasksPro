import styled from '@emotion/styled';

export const Column = styled.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 335px;
  filter: ${({ isLoading }) => (isLoading ? 'blur(25px)' : 'none')};
  transition: filter 0.4s ease-in-out;

  @media screen and (max-width: 374px) {
    width: calc(100vw - 40px);
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }
`;

export const ColumnHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 17px;
  background-color: ${props => props.theme.palette.background.cardItem};
  border-radius: 8px;
  cursor: pointer;
`;

export const ItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 100px;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

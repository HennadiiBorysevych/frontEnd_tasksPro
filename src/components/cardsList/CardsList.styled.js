import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-right: 18px;
  padding-bottom: 13px;
`;

export const ColumnsContainer = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 21px;
  margin-right: 21px;
`;

export const Column = styled.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 335px;
  filter: ${({ isLoading }) => (isLoading ? 'blur(25px)' : 'none')};
  transition: filter 0.4s ease-in-out;
  @media (max-width: 390px) {
    width: calc(100vw - 65px);
  }
`;

export const ColumnHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 20px;
  background-color: ${props => props.theme.palette.background.cardItem};
  border-radius: 8px;
  cursor: pointer;
`;

export const ColumnHeadingText = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

export const ItemsContainer = styled.div`
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

export const AddColumnButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  width: 334px;
  height: 56px;
  background-color: #121212;
  border-radius: 8px;
  transition: 0.3s opacity ease;
  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonWrapper = styled.div`
  height: 56px;
`;

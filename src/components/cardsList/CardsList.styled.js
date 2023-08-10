import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-right: 18px;
  padding-bottom: 18px;
`;

export const ColumnsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 21px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 350px;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  filter: ${({ isLoading }) => (isLoading ? 'blur(8px)' : 'none')};
  transition: opacity 0.3s ease, filter 0.3s ease;
`;

export const ColumnHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 334px;
  height: 56px;
  padding: 0 20px;
  background-color: #121212;
  border-radius: 8px;
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

export const IconButton = styled.button`
  display: flex;
  transition: 0.3s opacity ease;
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonWrapper = styled.div`
  margin-right: 16px;
  height: 56px;
`;

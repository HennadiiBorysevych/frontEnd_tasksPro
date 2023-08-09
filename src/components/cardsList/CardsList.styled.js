import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 8px;
`;

export const ColumnsContainer = styled.div`
  display: grid;
  grid-auto-columns: minmax(334px, 334px);
  grid-auto-flow: column;
  grid-gap: 8px;
  width: fit-content;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-auto-columns: minmax(50%, 50%);
    background-color: rgb(184, 187, 182);
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    background-color: aqua;
  }
`;

export const Column = styled.div`
  padding: 8px;
  background-color: #1f1f1f;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  filter: ${({ isLoading }) => (isLoading ? 'blur(8px)' : 'none')};
  transition: opacity 0.3s ease, filter 0.3s ease; /* Add transition properties */
`;

export const ColumnHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  margin-bottom: 14px;
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
  min-height: 100px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  overflow-x: auto;
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
`;

export const ColumnHeading = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  padding: 18px 20px;
  margin-bottom: 14px;
  background-color: #121212;
  border-radius: 8px;
`;

export const ItemsContainer = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
`;

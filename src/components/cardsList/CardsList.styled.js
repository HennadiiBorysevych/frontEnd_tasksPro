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

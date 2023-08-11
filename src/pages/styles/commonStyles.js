import styled from '@emotion/styled';

export const Background = styled.section`
  background-image: var(--welcomeBgColor);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  padding: 0 20px;
  @media screen and (min-width: 1439px) {
    width: 473px;
  }
`;

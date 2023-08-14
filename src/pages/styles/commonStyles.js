import styled from '@emotion/styled';

export const Background = styled.section`
  background-image: var(--welcomeBgColor);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
    width: 1440px;
  }
`;

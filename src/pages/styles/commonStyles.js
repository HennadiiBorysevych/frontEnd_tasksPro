import { media } from 'helpers';

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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  ${media.SMALL`
  width: 375px;
  `}

  ${media.MEDIUM`
  width: 768px;
  `}

  ${media.LARGE`
  padding: 0;
  width: 1440px;
  `}
`;

import { BASE_COLORS } from 'constants';

import styled from '@emotion/styled';

export const Background = styled.section`
  position: relative;
  background-image: ${BASE_COLORS.authColors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 24px;
  margin-top: 24px;
  justify-content: flex-start;
  align-items: start;
`;

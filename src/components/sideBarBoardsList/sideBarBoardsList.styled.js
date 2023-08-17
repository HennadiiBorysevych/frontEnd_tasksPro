import { media } from 'helpers';

import styled from '@emotion/styled';

export const BoardList = styled.ul`
  position: relative;
  margin-bottom: 40px;
  height: 100%;
  max-height: 256px;
  overflow-y: auto;

  ${media.MEDIUM`
  max-height: 380px;
  `}

  ${media.LARGE`
  max-height: 100%;
  `}
`;

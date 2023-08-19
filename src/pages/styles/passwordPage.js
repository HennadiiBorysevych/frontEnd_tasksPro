import { media } from 'helpers';

import styled from '@emotion/styled';

export const PasswordContainer = styled.div`
  position: relative;

  width: 100%;
  padding: 24px;

  background-color: var(--bgColorAuth);
  border-radius: 8px;

  ${media.MEDIUM`
  padding: 40px;
  width: 424px;
  `}
`;

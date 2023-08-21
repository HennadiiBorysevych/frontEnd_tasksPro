import { media } from 'helpers';

import styled from '@emotion/styled';

export const Container = styled.div`
  ${media.maxPRESMALL`
  max-width: 335px;
    `}

  ${media.SMALL`
     width: 100%;`}
`;

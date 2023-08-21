import { media } from 'helpers';

import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  ${media.PRESMALL`
  max-width: 335px;`}

  ${media.SMALL`
  width: 335px;`}

  ${media.MEDIUM`
  width: 350px;
    `}
`;

export const Wrapper = styled.span`
  color: ${props => props.theme.palette.text.primary};
`;

import { media } from 'helpers';

import Typography from 'components/typography/Typography';

import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ boardName }) =>
    boardName ? 'space-between' : 'flex-end'};

  margin-bottom: 39px;
  width: 100%;

  ${media.MEDIUM`
  margin-bottom: 26px;`}

  ${media.LARGE`
  margin-bottom: 10px;
    `}
`;

export const BoardTitle = styled(Typography)`
  text-shadow: #ffffff 1px 0 1px;
`;

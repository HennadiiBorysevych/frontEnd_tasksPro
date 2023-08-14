import Typography from 'components/typography/Typography';

import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ boardName }) =>
    boardName ? 'space-between' : 'flex-end'};

  margin-bottom: 39px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 26px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
  }
`;

export const BoardTitle = styled(Typography)`
  text-shadow: #ffffff 1px 0 1px;
`;

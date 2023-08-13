import styled from '@emotion/styled';

export const BoardList = styled.ul`
  position: relative;
  margin-bottom: 40px;
  max-height: 256px;
  overflow-y: auto;
  margin-left: -24px;
  margin-right: -24px;

  @media screen and (min-width: 768px) {
    max-height: 380px;
  }

  @media screen and (min-width: 1440px) {
    max-height: 100%;
  }
`;

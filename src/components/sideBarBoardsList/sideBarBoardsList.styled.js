import styled from '@emotion/styled';

export const BoardList = styled.ul`
  position: relative;
  margin-bottom: 40px;
  max-height: 256px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    max-height: 380px;
  }

  @media screen and (min-width: 1440px) {
    max-height: 100%;
  }
`;

// export const Scrollbar = styled(CustomScrollbar)`
//   width: 100%;
//   overflow: auto;
//   height: 256px;

//   @media screen and (min-width: 768px) {
//     height: 380px;
//   }

//   @media screen and (min-width: 1440px) {
//     height: 126px;
//   }
// `;

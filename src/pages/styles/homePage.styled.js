import styled from '@emotion/styled';

export const BoardWrap = styled.div`
  padding: 14px 20px 60px;
  background-color: ${props => `${props.theme.palette.background.bord}`};
  background-repeat: no-repeat;
  background-image: url(${props => props.bg});
  background-size: cover;
  color: ${props => `${props.theme.palette.text.primary}B2`};
  min-height: calc(100vh - 60px);

  @media screen and (min-width: 768px) {
    padding: 26px 32px 96px;
    min-height: calc(100vh - 68px);
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 24px 36px;
  }
`;

export const DefaultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 190.5px);

  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 134.5px);
  }
`;

export const WelcomeText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.24px;
  color: ${props => `${props.theme.palette.text.primary}B2`};
  text-align: center;
`;

export const CreateBoardLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${props => `${props.theme.palette.hover.inputAndIcon}`};
`;

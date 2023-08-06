import styled from '@emotion/styled';

export const BoardWrap = styled.div`
  padding: 14px 20px 60px;
  background-color: #1f1f1f;
  color: #ffffff;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    padding: 26px 32px 96px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 24px 36px;
  }
`;

export const BoardBody = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WelcomeText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: -0.24px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;

export const CreateBoardLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: var(--highPriorityColor);
`;

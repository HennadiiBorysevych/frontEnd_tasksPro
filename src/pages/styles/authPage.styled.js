import styled from '@emotion/styled';

export const AuthContainer = styled.div`
  position: absolute;
  min-width: 275px;
  margin: 0 auto;
  padding: 24px;

  background-color: var(--bgColorAuth);
  border-radius: 8px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 335px;
    padding: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 395px;
    padding: 40px;
  }
`;

export const TabsContainer = styled.div`
  padding-bottom: 40px;
  list-style: none;
  text-decoration: none;
  color: white;
`;
export const AppName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  margin-top: 24px;
`;

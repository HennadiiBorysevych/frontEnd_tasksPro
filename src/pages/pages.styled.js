import styled from '@emotion/styled';

// WELCOME PAGE
export const Background = styled.section`
  position: relative;
  background-image: var(--welcomeBgColor);
  text-align: center;

  min-height: 100vh;
`;

export const Container = styled.div`
  position: absolute;
  margin: 0 auto;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 473px;
    width: 438px;
  }
`;

export const AppLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserImage = styled.img`
  margin-bottom: 14px;
`;

export const AppDescription = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export const WelcomeText = styled.p`
  font-weight: 400;
  font-size: 14px;

  margin-top: 24px;
  margin-bottom: 48px;
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const RegisterLink = styled.li`
  padding: 14px 100px;
  background-color: var(--bgColorAuth);
  border-radius: 8px;
  color: white;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    padding: 14px 126px;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 131px;
  }
`;

// AUTH PAGE
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

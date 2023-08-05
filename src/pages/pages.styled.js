import styled from '@emotion/styled';

// WELCOME PAGE
export const Background = styled.section`
  position: relative;
  background-image: var(--welcomeBgColor);
  text-align: center;

  height: 770px;
`;

export const Container = styled.div`
  position: absolute;
  width: 475px;
  margin: 0 auto;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AppLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AppName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  margin-top: 24px;
`;

export const WelcomeText = styled.p`
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
  padding: 14px 130px;
  background-color: var(--bgColorAuth);
  border-radius: 8px;
  color: white;
`;

// AUTH PAGE
export const AuthContainer = styled.div`
  position: absolute;
  width: 455px;
  margin: 0 auto;
  padding: 40px;

  background-color: var(--bgColorAuth);
  border-radius: 8px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TabsContainer = styled.div`
  padding-bottom: 40px;
  list-style: none;
  text-decoration: none;
  color: white;
`;

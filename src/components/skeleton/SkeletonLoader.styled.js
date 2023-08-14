import styled from '@emotion/styled';

// WELCOME PAGE
export const Background = styled.section`
  position: relative;
  background-image: var(--welcomeBgColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
export const BackgroundLogin = styled.section`
  position: relative;
  background-image: var(--welcomeBgColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
export const BackgroundHome = styled.section`
  height: 60px;
  width: 100%;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 24px;
  margin-top: 24px;
  justify-content: flex-start;
  align-items: start;
`;
export const Header = styled.header`
  display: flex;
  width: 100%;
  background-color: #161616;
  height: 60px;
  justify-content: space-between;
  align-items: start;
  padding: 20px;
`;
export const SideBar = styled.aside`
  background-color: #161616;
  height: 100vh;
  width: 260px;
  position: absolute;
`;
export const Logo = styled.div`
  width: 30px;
  height: 120px;
  @media (min-width: 1440px) {
    width: 115px;
    height: 34px;
  }
`;

export const Theme = styled.div`
  width: 65px;
  height: 68px;
  @media (min-width: 1440px) {
    width: 115px;
    height: 68px;
  }
`;
export const UserPic = styled.div`
  width: 32px;
  height: 32px;
`;
export const UserName = styled.div`
  width: 65px;
  height: 68px;
  @media (min-width: 1440px) {
    width: 115px;
    height: 68px;
  }
`;

export const BoardBody = styled.div`
  padding-top: 14px;
  background-color: #1f1f1f;
`;

export const ProjectName = styled.div`
  width: 80%;
  height: 21px;

  @media (min-width: 778px) {
    width: 90%;
    height: 40px;
  }
`;
export const Filters = styled.div`
  width: 40px;
  height: 2px;
  @media (min-width: 778px) {
    width: 60px;
    height: 30px;
  }
`;
export const Button = styled.div`
  margin-top: 30px;
  width: 80%;

  @media (min-width: 778px) {
    width: 80%;
  }
`;
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

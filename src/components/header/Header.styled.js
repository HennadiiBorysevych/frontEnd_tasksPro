import styled from '@emotion/styled';

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  color: #ffffff;
  background-color: #161616;

  @media screen and (min-width: 768px) {
    padding: 18px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 18px 24px;
    justify-content: flex-end;
  }
`;

const SideBarButton = styled.button`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const UserSettings = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const styles = {
  HeaderBox,
  SideBarButton,
  UserSettings,
};

export default styles;

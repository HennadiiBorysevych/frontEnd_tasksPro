import { Outlet } from 'react-router-dom';
import { Container, ScreenWrapper } from './SharedLayouts.styled';
import { SideBar, Header } from 'components';

const SharedLayout = () => {
  return (
    <Container>
      <SideBar />
      <ScreenWrapper>
        <Header />
        <Outlet />
      </ScreenWrapper>
    </Container>
  );
};
export default SharedLayout;

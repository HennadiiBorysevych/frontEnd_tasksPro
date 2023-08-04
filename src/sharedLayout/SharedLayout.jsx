import { Outlet } from 'react-router-dom';
import { Container, ScreenWrapper } from './SharedLayouts.styled';
import { SideBar, Header } from 'components';
import { useState } from 'react';

const SharedLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSideBar = e => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <Container>
      <ScreenWrapper>
        <Header isOpenSideBar={openSidebar} />
        <SideBar isOpen={isOpen} isClose={closeSideBar} />
        <Outlet />
      </ScreenWrapper>
    </Container>
  );
};
export default SharedLayout;

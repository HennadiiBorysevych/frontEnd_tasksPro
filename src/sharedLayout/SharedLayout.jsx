import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, ScreenWrapper } from './SharedLayouts.styled';
import { SideBar, Header } from 'components';

const SharedLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  const updateWindowHeight = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowHeight);

    return () => {
      window.removeEventListener('resize', updateWindowHeight);
    };
  }, []);

  useEffect(() => {
    if (isScrollDisabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isScrollDisabled]);

  const openSidebar = () => {
    setIsOpen(true);
    setIsScrollDisabled(true);
  };

  const closeSideBar = e => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      setIsScrollDisabled(false);
    }
  };

  return (
    <Container>
      <ScreenWrapper style={{ display: 'flex' }}>
        <SideBar
          isOpen={isOpen}
          isClose={closeSideBar}
          windowHeight={windowHeight}
        />
        <div style={{ width: '100%' }}>
          <Header isOpenSideBar={openSidebar} />
          {children}
        </div>
      </ScreenWrapper>
    </Container>
  );
};
export default SharedLayout;

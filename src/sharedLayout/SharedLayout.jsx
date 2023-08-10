import { useEffect, useState } from 'react';

import { Header, SideBar } from 'components';

import { Container, MainWrapper, ScreenWrapper } from './SharedLayouts.styled';

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

  const closeSideBar = () => {
    setIsOpen(false);
    setIsScrollDisabled(false);
  };

  const toggleModalAndSideBar = () => {
    closeSideBar();
  };

  return (
    <Container>
      <ScreenWrapper>
        <SideBar
          isOpen={isOpen}
          isClose={closeSideBar}
          windowHeight={windowHeight}
          onToggleModalAndSideBar={toggleModalAndSideBar}
        />
        <MainWrapper style={{ width: '100%' }}>
          <Header isOpenSideBar={openSidebar} />
          {children}
        </MainWrapper>
      </ScreenWrapper>
    </Container>
  );
};
export default SharedLayout;

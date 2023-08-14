import { createContext, useContext, useEffect, useState } from 'react';

import { Header, SideBar } from 'components';

import { Container, MainWrapper, ScreenWrapper } from './SharedLayouts.styled';

const ToggleContext = createContext();

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
    <ToggleContext.Provider value={toggleModalAndSideBar}>
      <Container>
        <ScreenWrapper>
          <SideBar
            isOpen={isOpen}
            isClose={closeSideBar}
            windowHeight={windowHeight}
            onToggleModalAndSideBar={toggleModalAndSideBar}
          />
          <MainWrapper>
            <Header isOpenSideBar={openSidebar} />
            {children}
          </MainWrapper>
        </ScreenWrapper>
      </Container>
    </ToggleContext.Provider>
  );
};
export const useToggleModalAndSideBar = () => useContext(ToggleContext);
export default SharedLayout;

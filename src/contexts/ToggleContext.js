import { createContext, useContext, useEffect, useState } from 'react';

const ToggleContext = createContext();

const ToggleProvider = ({ children }) => {
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
    setIsOpen(false);
    setIsScrollDisabled(true);
  };

  return (
    <ToggleContext.Provider
      value={{
        isOpen,
        windowHeight,
        openSidebar,
        closeSideBar,
        toggleModalAndSideBar,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

const useToggleModalAndSideBar = () => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error(
      'useToggleModalAndSideBar must be used within a ToggleProvider'
    );
  }

  return context;
};

export { ToggleProvider as default, useToggleModalAndSideBar };

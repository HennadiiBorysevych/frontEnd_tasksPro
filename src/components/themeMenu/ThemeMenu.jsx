import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useAuthRedux } from 'redux/services';

import * as styles from './ThemeMenu.styled';

const ThemeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { changeTheme } = useAuthRedux();

  const dropdownRef = useRef(null);
  const themes = ['Dark', 'Light', 'Violet'];
  const [theme, setTheme] = useState('Dark');

  useEffect(() => {
    const StoredTheme = localStorage.getItem('theme');
    if (StoredTheme) {
      setTheme(StoredTheme);
    }
  }, []);

  const handleWindowClick = useCallback(event => {
    if (!dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const handleKeyDown = useCallback(event => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', handleWindowClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handleWindowClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, handleWindowClick, isOpen]);

  const handleThemeChange = async newTheme => {
    setIsOpen(false);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    try {
      await changeTheme(newTheme);
      setIsOpen(false);
    } catch (error) {
      console.error('Error updating theme:', error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <styles.DropdownWrapper ref={dropdownRef}>
      <styles.DropdownButton
        onClick={toggleDropdown}
        type="button"
        id="switcher-theme-button"
        isOpen={isOpen}
      >
        <styles.DropdownTitle variant="buttonPopUpAndDropdownText">
          Theme
        </styles.DropdownTitle>
        <styles.DropdownIcon
          svgName="icon-arrow-down"
          size="16"
          variantIcon="header"
          isActive="true"
        />
      </styles.DropdownButton>
      {isOpen && (
        <styles.DropdownMenu>
          {themes.map(newTheme => (
            <MemoisedDropdownItem
              key={newTheme}
              onClick={() => handleThemeChange(newTheme)}
              variant="themeMenuText"
              className={newTheme === theme ? 'selected' : ''}
            >
              {newTheme}
            </MemoisedDropdownItem>
          ))}
        </styles.DropdownMenu>
      )}
    </styles.DropdownWrapper>
  );
};

const MemoisedDropdownItem = React.memo(
  styles.DropdownItem,
  (prevProps, nextProps) => {
    return (
      prevProps.newTheme === nextProps.newTheme &&
      prevProps.theme === nextProps.theme
    );
  }
);

export default ThemeMenu;

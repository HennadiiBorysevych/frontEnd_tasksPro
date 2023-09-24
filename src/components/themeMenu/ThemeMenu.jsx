import React, { useEffect, useState } from 'react';

import { useAuthCollector } from 'hooks';

import {
  DropdownButton,
  DropdownIcon,
  DropdownItem,
  DropdownMenu,
  DropdownWrapper,
} from './ThemeMenu.styled';

const ThemeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, changeTheme } = useAuthCollector();

  const themes = ['Dark', 'Light', 'Violet'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleWindowClick = event => {
      if (event.target.nodeName !== 'LI') {
        closeDropdown();
      }
    };

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    window.addEventListener('mousedown', handleWindowClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handleWindowClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleThemeChange = async newTheme => {
    setIsOpen(false);
    localStorage.setItem('theme', newTheme);
    try {
      await changeTheme(newTheme);
      closeDropdown();
    } catch (error) {
      console.error('Error updating theme:', error);
    }
  };

  return (
    <DropdownWrapper>
      <DropdownButton
        onClick={toggleDropdown}
        type="button"
        id="switcher-theme-button"
        isOpen={isOpen}
      >
        Theme
        <DropdownIcon
          svgName="icon-arrow-down"
          size="16"
          variantIcon="header"
          isActive="true"
        />
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {themes.map(newTheme => (
            <DropdownItem
              key={newTheme}
              onClick={() => handleThemeChange(newTheme)}
              className={newTheme === theme ? 'selected' : ''}
            >
              {newTheme}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default ThemeMenu;

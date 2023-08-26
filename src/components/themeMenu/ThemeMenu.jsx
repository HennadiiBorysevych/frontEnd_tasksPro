import React, { useEffect, useState } from 'react';
import { useAuth } from 'hooks';

import { SvgIcon } from 'components';

import {
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  DropdownWrapper,
} from './ThemeMenu.styled';

const ThemeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, changeTheme } = useAuth();

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
      <DropdownButton onClick={toggleDropdown}>
        Theme
        <SvgIcon
          svgName="icon-arrow-down"
          size="16"
          variant="header"
          isActive="true"
        ></SvgIcon>
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

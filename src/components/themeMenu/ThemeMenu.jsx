import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { selectTheme } from 'redux/auth/authSelectors';

import { SvgIcon } from 'components';

import {
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  DropdownWrapper,
} from './ThemeMenu.styled';

const ThemeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = ['Dark', 'Light', 'Violet'];

  const dispatch = useDispatch();
  const selectedTheme = useSelector(selectTheme);

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

  const handleThemeChange = async theme => {
    setIsOpen(false);

    try {
      await dispatch(authOperations.updateUserTheme(theme));
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
          {themes.map(theme => (
            <DropdownItem
              key={theme}
              onClick={() => handleThemeChange(theme)}
              className={selectedTheme === theme ? 'selected' : ''}
            >
              {theme}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default ThemeMenu;

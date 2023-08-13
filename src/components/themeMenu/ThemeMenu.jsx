import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateUserTheme } from 'redux/auth/authOperations';
import selectTheme from 'redux/theme/themeSelectors';
import { setTheme } from 'redux/theme/themeSlice';

import { SvgIcon } from 'components';

import {
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  DropdownWrapper,
} from './ThemeMenu.styled';

const ThemeMenu = props => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedTheme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const themes = ['Dark', 'Light', 'Violet'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  // const handleThemeChange = async theme => {
  //   setIsOpen(false);

  //   try {
  //     await dispatch(authOperations.updateUserTheme(theme));
  //   } catch (error) {
  //     console.error('Error updating theme:', error);
  //   }

  //   closeDropdown();
  // };

  const handleThemeChange = theme => {
    dispatch(setTheme(theme));
    dispatch(updateUserTheme(theme));
    closeDropdown();
  };

  useEffect(() => {
    const handleWindowClick = event => {
      if (isOpen && !dropdownRef.current.contains(event.target)) {
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

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        Theme
        <SvgIcon
          svgName="icon-arrow-down"
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

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SvgIcon } from 'components';
import { authOperations } from 'redux/auth';
import {
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  DropdownWrapper,
} from './ThemeMenu.styled';
import { selectTheme } from 'redux/auth/authSelectors';

const ThemeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = ['Dark', 'Light', 'Violet'];

  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectedTheme = useSelector(selectTheme);

  const handleThemeChange = async theme => {
    setIsOpen(false);

    try {
      await dispatch(authOperations.updateUserTheme(theme));
    } catch (error) {
      console.error('Error updating theme:', error);
    }
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        Theme
        <SvgIcon svgName="icon-arrow-down"></SvgIcon>
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

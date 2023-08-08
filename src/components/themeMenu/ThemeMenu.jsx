import React, { useState } from 'react';

import { SvgIcon } from 'components';

import {
DropdownButton,
  DropdownItem,
  DropdownMenu,
  DropdownWrapper, } from './ThemeMenu.styled';

const ThemeMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('Dark');

  const themes = ['Dark', 'Light', 'Violet'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    setIsOpen(false);
  }
  
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

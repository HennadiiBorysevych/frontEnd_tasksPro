import React from 'react';
import { Profile, SvgIcon, ThemeMenu } from 'components';
import { HeaderBox, UserSettings } from './Header.styled';
import PropTypes from 'prop-types';

const Header = ({ isOpenSideBar }) => {
  return (
    <HeaderBox>
      <button type="button" onClick={isOpenSideBar}>
        <SvgIcon svgName="icon-menu" size={28} stroke="#ffffff" />
      </button>
      <UserSettings>
        <ThemeMenu />
        <Profile />
      </UserSettings>
    </HeaderBox>
  );
};

export default Header;

Header.propTypes = {
  isOpenSideBar: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import { Profile, SvgIcon, ThemeMenu } from 'components';

import styles from './Header.styled';

const Header = ({ isOpenSideBar }) => {
  return (
    <styles.HeaderBox>
      <styles.SideBarButton type="button" onClick={isOpenSideBar}>
        <SvgIcon svgName="icon-menu" size={28} stroke="#ffffff" />
      </styles.SideBarButton>
      <styles.UserSettings>
        <ThemeMenu />
        <Profile />
      </styles.UserSettings>
    </styles.HeaderBox>
  );
};

export default Header;

Header.propTypes = {
  isOpenSideBar: PropTypes.func.isRequired,
};

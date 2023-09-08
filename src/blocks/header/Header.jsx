import React from 'react';

import { useToggleModalAndSideBar } from 'contexts';

import { Profile, ThemeMenu } from 'components';
import { SvgIcon } from 'ui';

import styles from './Header.styled';

const Header = () => {
  const { openSidebar } = useToggleModalAndSideBar();

  return (
    <styles.HeaderBox>
      <styles.SideBarButton
        type="button"
        id="open-sidebar-button"
        aria-label="Open sidebar button"
        onClick={() => openSidebar()}
      >
        <SvgIcon
          svgName="icon-menu"
          size={28}
          variant="header"
          isActive={true}
        />
      </styles.SideBarButton>
      <styles.UserSettings>
        <ThemeMenu />
        <Profile />
      </styles.UserSettings>
    </styles.HeaderBox>
  );
};

export default Header;

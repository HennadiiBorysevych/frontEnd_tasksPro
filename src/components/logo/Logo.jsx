// import React, { useEffect, useState } from 'react';
import { SvgIcon } from 'components';

import { LogoWrapper, SideBar, Welcome } from './Logo.styled';
// import { useTheme } from '/ThemeProvider';

const Logo = ({ variant }) => {
  // const [svgName, setSvgName] = useState('icon-logo-big');
  // const { theme } = useTheme();

  // useEffect(() => {
  //   if (variant === 'bord') {
  //     if (theme === 'violet') {
  //       setSvgName('icon-logo-violet');
  //     }
  //     else {
  //       setSvgName('icon-logo-dark');
  //     }
  //   }
  //   else {
  //      setSvgName('icon-logo-big');
  //   }
  // }, [theme, variant])

  const iconSize =
    variant === 'welcome' ? (window.innerWidth >= 768 ? '48' : '40') : '32';

  return (
    <LogoWrapper variant={variant}>
      <SvgIcon svgName="icon-logo-big" size={iconSize} stroke="none" />
      {variant === 'welcome' ? (
        <Welcome>Task Pro</Welcome>
      ) : (
        <SideBar>Task Pro</SideBar>
      )}
    </LogoWrapper>
  );
};

export default Logo;

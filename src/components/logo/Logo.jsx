import React from 'react';
import { useLocation } from 'react-router-dom';
import { SvgIcon } from 'components';
import { LogoWrapper, AppName } from './Logo.styled';

const Logo = ({ size, stroke }) => {
  const location = useLocation();
  const isWelcomePage = location.pathname === '/';
  const h1FontSize = isWelcomePage ? '28px' : '16px';
  const h1LetterSpacing = isWelcomePage ? '-1.12px' : '-0.64px';
  const defaultSize = '32';
  const logoSize = size || defaultSize;

  return (
    <LogoWrapper>
      <SvgIcon svgName="icon-icon" size={logoSize} stroke={stroke} />
      <AppName style={{ fontSize: h1FontSize, letterSpacing: h1LetterSpacing }}>
        {' '}
        Task Pro{' '}
      </AppName>
    </LogoWrapper>
  );
};

export default Logo;

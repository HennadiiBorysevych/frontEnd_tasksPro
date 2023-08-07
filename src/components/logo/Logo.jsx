import React from 'react';
import { useLocation } from 'react-router-dom';
import { LogoWrapper, AppName } from './Logo.styled';
import sprite from 'assets/images/sprite.svg';

const Logo = () => {
  const location = useLocation();
  const isWelcomePage = location.pathname === '/welcome';
  const h1FontSize = isWelcomePage ? '28px' : '16px';
  const iconLogoSize = isWelcomePage ? '40px' : '32px';
  const h1LetterSpacing = isWelcomePage ? '-1.12px' : '-0.64px';

  return (
    <LogoWrapper gap={isWelcomePage}>
      <svg width={iconLogoSize} height={iconLogoSize}>
        <use href={sprite + '#icon-logo-big'}></use>
      </svg>
      <AppName style={{ fontSize: h1FontSize, letterSpacing: h1LetterSpacing }}>
        {' '}
        Task Pro{' '}
      </AppName>
    </LogoWrapper>
  );
};

export default Logo;

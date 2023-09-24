import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useAuthCollector } from 'hooks';

import sprite from 'assets/images/sprite.svg';

import { Board, LogoWrapper, Welcome } from './Logo.styled';

const Logo = ({ variantLogo }) => {
  const [svgName, setSvgName] = useState('icon-logo-big');
  const { theme } = useAuthCollector();

  useEffect(() => {
    if (variantLogo === 'board') {
      if (theme === 'Violet') {
        setSvgName('icon-logo-violet');
      } else {
        setSvgName('icon-logo-dark');
      }
    } else {
      setSvgName('icon-logo-big');
    }
  }, [theme, variantLogo]);

  const iconSize =
    variantLogo === 'welcome' ? (window.innerWidth >= 768 ? '48' : '40') : '32';

  return (
    <LogoWrapper variantLogo={variantLogo}>
      <svg
        width={iconSize}
        height={iconSize}
        fill="none"
        xmlns="http://www.w3.org/2000/svg" //---?-------------
      >
        <use href={sprite + `#${svgName}`} />
      </svg>
      {variantLogo === 'welcome' ? (
        <Welcome>Task Pro</Welcome>
      ) : (
        <Board>Task Pro</Board>
      )}
    </LogoWrapper>
  );
};

Logo.propTypes = {
  variantLogo: PropTypes.oneOf(['board', 'welcome']),
};

export default Logo;

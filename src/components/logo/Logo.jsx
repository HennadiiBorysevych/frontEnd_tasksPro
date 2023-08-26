import React, { useEffect, useState } from 'react';
import sprite from 'assets/images/sprite.svg';
import { useAuth } from 'hooks';
import PropTypes from 'prop-types';

import { Board, LogoWrapper, Welcome } from './Logo.styled';

const Logo = ({ variant }) => {
  const [svgName, setSvgName] = useState('icon-logo-big');
  const { theme } = useAuth();

  useEffect(() => {
    if (variant === 'bord') {
      if (theme === 'Violet') {
        setSvgName('icon-logo-violet');
      } else {
        setSvgName('icon-logo-dark');
      }
    } else {
      setSvgName('icon-logo-big');
    }
  }, [theme, variant]);

  const iconSize =
    variant === 'welcome' ? (window.innerWidth >= 768 ? '48' : '40') : '32';

  return (
    <LogoWrapper variant={variant}>
      <svg
        width={iconSize}
        height={iconSize}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use href={sprite + `#${svgName}`} />
      </svg>
      {variant === 'welcome' ? (
        <Welcome>Task Pro</Welcome>
      ) : (
        <Board>Task Pro</Board>
      )}
    </LogoWrapper>
  );
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['bord', 'welcome']),
};

export default Logo;

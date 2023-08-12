import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import sprite from 'assets/images/sprite.svg';
import PropTypes from 'prop-types';
import selectTheme from 'redux/theme/themeSelectors';

import { Bord, LogoWrapper, Welcome } from './Logo.styled';

const Logo = ({ variant }) => {
  const [svgName, setSvgName] = useState('icon-logo-big');
  const theme = useSelector(selectTheme);

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
        <Bord>Task Pro</Bord>
      )}
    </LogoWrapper>
  );
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['bord', 'welcome']),
};

export default Logo;

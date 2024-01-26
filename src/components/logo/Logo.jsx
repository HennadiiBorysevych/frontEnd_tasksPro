import React, { useEffect, useState } from 'react';
import { useAuthRedux } from 'redux/services';

import { Typography } from 'ui';

import sprite from 'assets/images/sprite.svg';

import LogoPropTypes from './propTypes';

import * as styles from './Logo.styled';

const Logo = ({ variantLogo }) => {
  const [svgName, setSvgName] = useState('icon-logo-big');
  const { theme } = useAuthRedux();

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

  return (
    <styles.LogoWrapper variantLogo={variantLogo}>
      <styles.ProjectIcon variantLogo={variantLogo}>
        <use href={sprite + `#${svgName}`} />
      </styles.ProjectIcon>
      {variantLogo === 'welcome' ? (
        <Typography variant="welcomeProjectTitle">Task Pro</Typography>
      ) : (
        <Typography variant="projectTitle">Task Pro</Typography>
      )}
    </styles.LogoWrapper>
  );
};
export default Logo;

Logo.propTypes = LogoPropTypes;

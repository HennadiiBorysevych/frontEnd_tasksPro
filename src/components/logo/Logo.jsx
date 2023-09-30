import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useAuthCollector } from 'hooks';

import { Typography } from 'ui';

import sprite from 'assets/images/sprite.svg';

import { LogoWrapper, ProjectIcon } from './Logo.styled';

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

  return (
    <LogoWrapper variantLogo={variantLogo}>
      <ProjectIcon variantLogo={variantLogo}>
        <use href={sprite + `#${svgName}`} />
      </ProjectIcon>
      {variantLogo === 'welcome' ? (
        <Typography variant="welcomeProjectTitle">Task Pro</Typography>
      ) : (
        <Typography variant="projectTitle">Task Pro</Typography>
      )}
    </LogoWrapper>
  );
};

Logo.propTypes = {
  variantLogo: PropTypes.oneOf(['board', 'welcome']),
};

export default Logo;

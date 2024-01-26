import React from 'react';

import sprite from 'assets/images/sprite.svg';

import SvgIconPropTypes from './propTypes';

import * as styles from './svgIcon.styled';

const SvgIcon = ({
  svgName,
  size = '14px',
  variantIcon,
  stroke = 'none',
  fill = 'none',
  isActive,
  ...rest
}) => {
  return (
    <styles.SvgStyled
      width={size}
      height={size}
      stroke={stroke}
      fill={fill}
      variantIcon={variantIcon}
      isActive={isActive}
      {...rest}
    >
      <use href={sprite + `#${svgName}`} />
    </styles.SvgStyled>
  );
};

export default SvgIcon;

SvgIcon.propTypes = SvgIconPropTypes;

import React from 'react';

import SvgIcon from '../svgIcon/SvgIcon';

import ButtonPlusPropTypes from './propTypes';

import * as styles from './ButtonPlus.styled';

const ButtonPlus = ({
  width,
  height,
  stroke,
  size,
  backgroundColor,
  variantIcon,
  ...rest
}) => {
  return (
    <styles.SpanStyled
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      variantIcon={variantIcon}
      {...rest}
    >
      <SvgIcon svgName="icon-plus" variantIcon={variantIcon} size={size} />
    </styles.SpanStyled>
  );
};

export default ButtonPlus;

ButtonPlus.propTypes = ButtonPlusPropTypes;

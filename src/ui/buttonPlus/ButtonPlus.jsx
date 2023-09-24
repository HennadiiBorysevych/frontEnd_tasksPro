import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../svgIcon/SvgIcon';

import { SpanStyled } from './ButtonPlus.styled';

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
    <SpanStyled
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      variantIcon={variantIcon}
      {...rest}
    >
      <SvgIcon svgName="icon-plus" variantIcon={variantIcon} size={size} />
    </SpanStyled>
  );
};

ButtonPlus.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backgroundColor: PropTypes.string,
  variantIcon: PropTypes.string,
};

export default ButtonPlus;

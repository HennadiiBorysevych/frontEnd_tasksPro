import React from 'react';
import PropTypes from 'prop-types';

import { SvgIcon } from 'components';

import { SpanStyled } from './ButtonPlus.styled';

const ButtonPlus = ({
  width,
  height,
  stroke,
  size,
  backgroundColor,
  ...rest
}) => {
 
  return (
    <SpanStyled
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      {...rest}
    >
      <SvgIcon svgName="icon-plus" stroke={stroke} size={size} />
    </SpanStyled>
  );
};

ButtonPlus.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backgroundColor: PropTypes.string,
};

export default ButtonPlus;

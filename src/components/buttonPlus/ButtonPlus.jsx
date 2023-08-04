import React from 'react';
import { SpanStyled } from './ButtonPlus.styled';
import SvgIcon from 'components/svgIcon/SvgIcon';
import PropTypes from 'prop-types';

const ButtonPlus = ({ width, height, stroke = '#ffffff', size }) => {
  return (
    <SpanStyled width={width} height={height}>
      <SvgIcon svgName="icon-plus" stroke={stroke} size={20} />
    </SpanStyled>
  );
};

ButtonPlus.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.string,
};

export default ButtonPlus;

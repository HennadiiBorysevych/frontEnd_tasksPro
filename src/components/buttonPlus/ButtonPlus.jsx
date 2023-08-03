import React from 'react';
import { SpanStyled } from './ButtonPlus.styled';
import SvgIcon from 'components/svgIcon/SvgIcon';
import PropTypes from 'prop-types';

const ButtonPlus = ({ svgName, width, height }) => {
  return (
    <SpanStyled width={width} height={height}>
      <SvgIcon svgName={svgName} stroke="#ffffff" />
    </SpanStyled>
  );
};

ButtonPlus.propTypes = {
  svgName: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default ButtonPlus;

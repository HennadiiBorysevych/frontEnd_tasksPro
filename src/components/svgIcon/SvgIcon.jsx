import React from 'react';
import sprite from 'assets/images/sprite.svg';
import { SvgStyled } from './svgIcon.styled';
import PropTypes from 'prop-types';

const SvgIcon = ({
  svgName,
  width = '14',
  height = '14',
  stroke,
  fill = 'none',
}) => {
  return (
    <SvgStyled width={width} height={height} stroke={stroke} fill={fill}>
      <use href={sprite + `#${svgName}`} />
    </SvgStyled>
  );
};

SvgIcon.propTypes = {
  svgName: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.string,
  fill: PropTypes.string,
};

export default SvgIcon;
